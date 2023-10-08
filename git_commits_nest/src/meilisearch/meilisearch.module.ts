import { Module } from '@nestjs/common';
import { MeilisearchService } from './meilisearch.service';
import { ConfigModule } from '@nestjs/config';
import { MeilisearchController } from './meilisearch.controller';

@Module({
  imports: [ConfigModule],
  providers: [MeilisearchService],
  controllers: [MeilisearchController],
})
export class MeilisearchModule {}
