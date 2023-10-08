import axios from 'axios';
import { FetchParams } from './../types/Commit';
import { useQuery } from 'react-query';



export const useFetchData = ({ url, queryKey, queryParams }: FetchParams) => {
  const fetcher = async () => {
    const res = await axios.get(url, {
      params: queryParams,
    });
    return res.data;
  };

  const { data, isLoading, isError } = useQuery(queryKey, fetcher);

  return { data, isLoading, isError };
};