export type Commit = {
    sha: string;
    message: string;
    authorName: string;
    authorEmail: string;
    id: string;
};
export type FetchParams = {
    url: string;
    queryKey: string;
    queryParams?: {
      index?: string;
      query?: string;
      page?: number;
      limit?: number;
    };
  };