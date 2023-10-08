import { Test, TestingModule } from '@nestjs/testing';
import { GithubController } from './github.controller';
import { GithubService } from './github.service';

describe('GithubController', () => {
  let controller: GithubController;
  const mockGithubService = {
    getCommits: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubController],
      providers: [
        {
          provide: GithubService,
          useValue: mockGithubService,
        },
      ],
    }).compile();

    controller = module.get<GithubController>(GithubController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return commits from the service', async () => {
    const mockCommits = [{ id: 'commit1' }, { id: 'commit2' }];
    mockGithubService.getCommits.mockReturnValue(mockCommits);

    const owner = 'fxev90';
    const repo = 'test_fulltime';
    const commits = await controller.getCommits(owner, repo);

    expect(commits).toBe(mockCommits);
    expect(mockGithubService.getCommits).toHaveBeenCalledWith(owner, repo);
  });
});
