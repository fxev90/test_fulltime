import { MeilisearchService } from './../meilisearch/meilisearch.service';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Commit } from './entities/commit.entity';
import { Cron } from '@nestjs/schedule';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CommitsService {
  private readonly logger = new Logger(CommitsService.name);
  private readonly repoUrl: string;
  private readonly perPage: number;

  constructor(
    @InjectRepository(Commit)
    private commitRepository: Repository<Commit>,
    private httpService: HttpService,
    private configService: ConfigService,
    private meilisearchService: MeilisearchService,
  ) {
    this.repoUrl = this.configService.get<string>('GITHUB_REPO_URL');
    this.perPage = this.configService.get<number>('ITEMS_PER_PAGE', 5);
  }

  @Cron('* * * * *')
  async fetchAndSaveCommits(test = false) {
    if (test) {
      await this.fetchAndSavePage(1);
    } else {
      let page = 1;
      while (true) {
        const hasMore = await this.fetchAndSavePage(page);
        if (!hasMore) break;
        page++;
      }
    }
  }

  private async fetchAndSavePage(page: number): Promise<boolean> {
    try {
      this.logger.log(`Fetching commits from GitHub API, page ${page}`);
      const response: AxiosResponse = await this.httpService
        .get(`${this.repoUrl}?page=${page}&per_page=${this.perPage}`)
        .toPromise();

      if (response.status === 403) {
        this.logger.error('Rate limit reached. Exiting.');
        return false;
      }

      if (response.data.length === 0) {
        this.logger.log('No more commits to fetch.');
        return false;
      }

      this.logger.log(
        `Saving ${response.data.length} commits to the database.`,
      );
      await this.saveCommits(response.data);
      return true;
    } catch (error) {
      this.logger.error(`An error occurred: ${error.message}`);
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
      this.meilisearchService.addDocuments('commits', [newCommit]);
      this.logger.log(`Saved commit ${commit.sha} to the database.`);
    }
  }
}
