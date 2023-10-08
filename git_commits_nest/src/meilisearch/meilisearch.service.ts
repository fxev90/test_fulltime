import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import MeiliSearch, { SearchResponse } from 'meilisearch';

@Injectable()
export class MeilisearchService {
  private client: MeiliSearch;

  constructor(private configService: ConfigService) {
    this.client = new MeiliSearch({
      host: this.configService.get<string>('MEILISEARCH_HOST'),
      apiKey: this.configService.get<string>('MEILISEARCH_API_KEY'),
    });
  }

  async getOrCreateIndex(indexName: string) {
    const index = await this.client.getIndex(indexName);
    if (index) {
      return index;
    }
    await this.client.createIndex(indexName);
    const newIndex = this.client.getIndex(indexName);
    return newIndex;
  }

  async addDocuments(indexName: string, documents: any[]) {
    return await this.client.index(indexName).addDocuments(documents);
  }

  async search(
    indexName: string,
    query: string,
    options?: Record<string, any>,
  ): Promise<SearchResponse<any>> {
    const index = await this.getOrCreateIndex(indexName);
    return await index.search(query, options);
  }
}
