import { Test, TestingModule } from '@nestjs/testing';
import { MeilisearchController } from './meilisearch.controller';
import { MeilisearchService } from './meilisearch.service';
import { SearchResponse } from 'meilisearch';

describe('MeilisearchController', () => {
  let controller: MeilisearchController;
  let mockService: jest.Mocked<MeilisearchService>;

  beforeEach(async () => {
    mockService = {
      search: jest.fn(),
    } as unknown as jest.Mocked<MeilisearchService>;

    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeilisearchController],
      providers: [
        {
          provide: MeilisearchService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<MeilisearchController>(MeilisearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('search', () => {
    it('should call MeilisearchService.search with correct parameters', async () => {
      const mockSearchResponse: SearchResponse<any> = {
        hits: [],
        offset: 0,
        limit: 10,
        processingTimeMs: 10,
        query: 'query',
      } as any;  // Type assertion here

      mockService.search.mockResolvedValue(mockSearchResponse);

      const result = await controller.search('some-index', 'query', '10', '1');

      expect(mockService.search).toHaveBeenCalledWith('some-index', 'query', '10', '1');
      expect(result).toEqual(mockSearchResponse);
    });
  });
});
