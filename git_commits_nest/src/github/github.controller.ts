import { Controller, Get, Query } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('commits')
  getCommits(@Query('owner') owner: string, @Query('repo') repo: string) {
    return this.githubService.getCommits(owner, repo);
  }
}