import { AxiosError } from 'axios';
import { useMutation, UseMutationResult } from 'react-query';
import ApiService from '../service/api';

type MutateData = (
  url: string,
  method: 'post' | 'delete' | 'patch',
  item?: object
) => UseMutationResult<any, AxiosError>;

const useMutate: MutateData = (url, method, item?) => {
  const mutateData = new ApiService(url)[method];
  return useMutation(() => mutateData(item as object));
};

export default useMutate;
