import { Module } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commit } from './entities/commit.entity';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { MeilisearchService } from 'src/meilisearch/meilisearch.service';
import { MeilisearchModule } from 'src/meilisearch/meilisearch.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([Commit]),
    HttpModule,
    ConfigModule,
    MeilisearchModule,
  ],
  providers: [CommitsService, MeilisearchService],
})
export class CommitsModule {}
