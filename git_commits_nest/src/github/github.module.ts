import { Module } from '@nestjs/common';
import { GithubService } from './github.service';
import { HttpModule } from '@nestjs/axios';
import { GithubController } from './github.controller';

@Module({
  providers: [GithubService],
  imports: [HttpModule],
  controllers: [GithubController],
})
export class GithubModule {}
