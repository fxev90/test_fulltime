import { Controller, Get, Query } from '@nestjs/common';
import { MeilisearchService } from './meilisearch.service';
import { SearchResponse } from 'meilisearch';

@Controller('search')
export class MeilisearchController {
  constructor(private readonly meilisearchService: MeilisearchService) {}

  @Get()
  async search(
    @Query('index') indexName: string = 'commits',
    @Query('query') query: string = '',
    @Query('limit') limit: string = '10',
    @Query('page') page: string = '1',
  ): Promise<SearchResponse<any>> {
    return await this.meilisearchService.search(indexName, query, limit, page);
  }
}
