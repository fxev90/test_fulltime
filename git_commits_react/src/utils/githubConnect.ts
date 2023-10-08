import axios from 'axios';
import { FetchParams } from './../types/Commit';
import { useQuery } from 'react-query';


export const useFetchData = ({ url, queryKey, queryParams}: FetchParams) => {
    const { page, limit } = queryParams || {};
  const fetcher = async () => {
    const res = await axios.get(`${url}?page=${page}&limit=${limit}`);
    return res.data;
  };

  const { data, isLoading, isError } = useQuery([queryKey, page, limit], fetcher);

  return { data, isLoading, isError };
};
