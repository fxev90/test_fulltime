import { useQuery } from 'react-query';

type FetchParams = {
  url: string;
  queryKey: string;
};

export const useFetchData = ({ url, queryKey }: FetchParams) => {
  const fetcher = async () => {
    const res = await fetch(url);
    return res.json();
  };

  const { data, isLoading, isError } = useQuery(queryKey, fetcher);

  return { data, isLoading, isError };
};