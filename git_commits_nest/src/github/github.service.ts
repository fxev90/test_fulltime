import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GithubService {
  constructor(private readonly httpService: HttpService) {}

  getCommits(owner: string, repo: string): Observable<AxiosResponse<any>> {
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
    return this.httpService.get(url).pipe(map((response) => response.data));
  }
}
