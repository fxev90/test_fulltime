import { Test, TestingModule } from '@nestjs/testing';
import { GithubService } from './github.service';
import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';
import { AxiosResponse, AxiosRequestHeaders } from 'axios';

describe('GithubService', () => {
  let service: GithubService;
  let httpService: HttpService;

  beforeEach(async () => {
    const mockHttpService = {
      get: jest.fn().mockReturnValue(of({})), // Initialize with a mock return value
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GithubService,
        {
          provide: HttpService,
          useValue: mockHttpService,
        },
      ],
    }).compile();

    service = module.get<GithubService>(GithubService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getCommits', () => {
    it('should return commits from GitHub API', done => {
      const mockCommits = [{ id: 'commit1' }, { id: 'commit2' }];
      const mockResponse: AxiosResponse = {
        data: mockCommits,
        status: 200,
        statusText: 'OK',
        headers: {}, // Add the missing headers property
        config: { headers: {} as AxiosRequestHeaders }, // Type assertion here
      };

      jest.spyOn(httpService, 'get').mockReturnValue(of(mockResponse));

      const owner = 'some-owner';
      const repo = 'some-repo';
      service.getCommits(owner, repo).subscribe({
        next: commits => {
          expect(commits).toEqual(mockCommits);
          expect(httpService.get).toHaveBeenCalledWith(`https://api.github.com/repos/${owner}/${repo}/commits`);
        },
        complete: done,
      });
    });
  });
});
