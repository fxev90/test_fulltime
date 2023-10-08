import { Test, TestingModule } from '@nestjs/testing';
import { CommitsService } from './commits.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Commit } from './entities/commit.entity';
import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';
import 'reflect-metadata';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MeilisearchModule } from '../meilisearch/meilisearch.module';
import { MeilisearchService } from '../meilisearch/meilisearch.service';

describe('CommitsService', () => {
  let service: CommitsService;
  let mockRepository: jest.Mocked<Repository<Commit>>;
  let mockHttpService: HttpService;
  let mockConfigService: ConfigService;
  beforeAll(() => {
    jest.mock('typeorm');
  });

  beforeEach(async () => {
    mockRepository = {
      findOne: jest.fn(),
      save: jest.fn(),
    } as any;
    const mockCommitData = [
      {
        sha: '123',
        commit: {
          message: 'test message',
          author: {
            name: 'John Doe',
            email: 'john.doe@example.com',
          },
        },
      },
    ];

    mockHttpService = {
      get: jest.fn().mockReturnValue(of({ data: mockCommitData })),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), MeilisearchModule],
      providers: [
        ConfigService,
        CommitsService,
        MeilisearchService,
        {
          provide: getRepositoryToken(Commit),
          useValue: mockRepository,
        },
        {
          provide: HttpService,
          useValue: mockHttpService,
        },
      ],
    }).compile();

    service = module.get<CommitsService>(CommitsService);
    mockConfigService = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should fetch and save commits', async () => {
    const mockCommitData = [
      {
        sha: '123',
        commit: {
          message: 'test message',
          author: {
            name: 'John Doe',
            email: 'john.doe@example.com',
          },
        },
      },
    ];

    jest.spyOn(mockHttpService, 'get').mockImplementationOnce(() =>
      of({
        data: mockCommitData,
      } as any),
    );

    await service.fetchAndSaveCommits(true);

    expect(mockRepository.save).toBeCalled();
    expect(mockRepository.findOne).toBeCalled();
  });
});
