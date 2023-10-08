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
    const newIndex = await this.client.createIndex(indexName);
    return newIndex;
  }

  async addDocuments(indexName: string, documents: any[]) {
    return await this.client.index(indexName).addDocuments(documents);
  }
}
