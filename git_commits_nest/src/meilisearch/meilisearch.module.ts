import { Module } from '@nestjs/common';
import { MeilisearchService } from './meilisearch.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [MeilisearchService],
})
export class MeilisearchModule {}
