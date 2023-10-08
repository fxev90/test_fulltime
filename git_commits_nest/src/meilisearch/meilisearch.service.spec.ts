import { Test, TestingModule } from '@nestjs/testing';
import { MeilisearchService } from './meilisearch.service';
import { ConfigService } from '@nestjs/config';
import MeiliSearch, { Index, SearchResponse } from 'meilisearch';

jest.mock('meilisearch');

describe('MeilisearchService', () => {
  let service: MeilisearchService;
  let mockIndex: Partial<Index>;

  beforeEach(async () => {
    mockIndex = {
      addDocuments: jest.fn(),
      search: jest.fn(),
    };

    (MeiliSearch as jest.MockedClass<typeof MeiliSearch>).mockImplementation(
      () => {
        return {
          getIndex: jest.fn().mockResolvedValue(mockIndex),
          createIndex: jest.fn().mockResolvedValue(mockIndex),
          index: jest.fn().mockReturnValue(mockIndex),
        } as unknown as MeiliSearch;
      },
    );

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MeilisearchService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('some_value'),
          },
        },
      ],
    }).compile();

    service = module.get<MeilisearchService>(MeilisearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getOrCreateIndex', () => {
    it('should return existing index if it exists', async () => {
      const result = await service.getOrCreateIndex('some-index');
      expect(result).toEqual(mockIndex);
    });
  });

  describe('addDocuments', () => {
    it('should add documents to the index', async () => {
      const documents = [{ id: 1, name: 'doc1' }];
      await service.addDocuments('some-index', documents);
      expect(mockIndex.addDocuments).toHaveBeenCalledWith(documents);
    });
  });

  describe('search', () => {
    it('should perform a search query', async () => {
      const mockSearchResponse: SearchResponse<any> = {
        hits: [],
        offset: 0,
        limit: 10,
        exhaustiveNbHits: true,
        processingTimeMs: 10,
        query: 'query',
      };

      mockIndex.search.mockResolvedValue(mockSearchResponse);

      const result = await service.search('some-index', 'query', '10', '1');
      expect(result).toEqual(mockSearchResponse);
    });
  });
});
