import ApiService from '../service/api';
import { useQuery } from 'react-query';

type FetchHook = (
  url: string,
  queryKey: [keyNmae: string, option?: object],
  params?: object
) => { data: Promise<Group[]>; isSuccess: boolean; isLoading: boolean; error: any };

const useFetch: FetchHook = (url, queryKey, params?) => {
  return useQuery(queryKey, () => new ApiService(url).get(params));
};

export default useFetch;
