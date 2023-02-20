import { UseQueryResult, useQuery } from 'react-query';
import { AxiosError } from 'axios';
import ApiService from '../service/api';

type FetchData = (url: string, params?: object) => UseQueryResult<any, AxiosError>;

const useFetch: FetchData = (url, params?) => {
  const fetchData = () => new ApiService(url).get(params);
  return useQuery([url, params], fetchData);
};

export default useFetch;
