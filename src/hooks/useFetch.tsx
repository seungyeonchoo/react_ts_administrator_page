import ApiService from '../service/api';
import { useQuery } from 'react-query';

const useFetch: (url: string, queryKey: any, params?: object) => any = (url, queryKey, params?) => {
  const api = new ApiService(url);

  const { data, isSuccess, isLoading, error } = useQuery(queryKey, () => api.get(params));

  return { data, isSuccess, isLoading, error };
};

export default useFetch;
