import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Commit } from './entities/commit.entity';
import { Cron } from '@nestjs/schedule';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class CommitsService {
  private readonly logger = new Logger(CommitsService.name);
  constructor(
    @InjectRepository(Commit)
    private commitRepository: Repository<Commit>,
    private httpService: HttpService,
  ) {}

  @Cron('* * * * *')
  async fetchAndSaveCommits() {
    let page = 1;
    while (true) {
      this.logger.log(`Fetching commits from GitHub API, page ${page}`);
      const response: AxiosResponse = await this.httpService
        .get(
          `https://api.github.com/repos/fxev90/test_fulltime/commits?page=${page}&per_page=5`,
        )
        .toPromise();

      if (response.data.length === 0) {
        this.logger.log('No more commits to fetch.');
        break;
      }
      this.logger.log(
        `Saving ${response.data.length} commits to the database.`,
      );
      await this.saveCommits(response.data);
      page++;
    }
  }

  async saveCommits(commits: any[]) {
    for (const commit of commits) {
      const existingCommit = await this.commitRepository.findOne({
        where: { sha: commit.sha },
      });

      if (existingCommit) {
        this.logger.log(`Commit ${commit.sha} already exists in the database.`);
        continue;
      }

      const newCommit = new Commit();
      newCommit.sha = commit.sha;
      newCommit.message = commit.commit.message;
      newCommit.authorName = commit.commit.author.name;
      newCommit.authorEmail = commit.commit.author.email;

      await this.commitRepository.save(newCommit);
      this.logger.log(`Saved commit ${commit.sha} to the database.`);
    }
  }
}
