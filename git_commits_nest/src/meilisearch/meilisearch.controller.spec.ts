import { Test, TestingModule } from '@nestjs/testing';
import { MeilisearchController } from './meilisearch.controller';

describe('MeilisearchController', () => {
  let controller: MeilisearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeilisearchController],
    }).compile();

    controller = module.get<MeilisearchController>(MeilisearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
