import ApiService from '../service/api';
import { useMutation } from 'react-query';

type MutateHook = (
  url: string,
  method: 'post' | 'patch' | 'delete',
  item?: object
) => {
  data?: Promise<any>;
  isSuccess: boolean;
  isLoading: boolean;
  error: any;
  handleMutation: () => any;
};

const useMutate: MutateHook = (url, method, item?) => {
  const mutateData = new ApiService(url)[method];

  const { mutate, data, isSuccess, isLoading, error } = useMutation(mutateData);

  return { data, isSuccess, isLoading, error, handleMutation };
};

export default useMutate;

// import { useMutation, useQueryClient } from 'react-query';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import Http from '../services/Http';
// import { updateUserId } from '../store/slices/inputSlice';
// import StorageUtils from '../utils/StorageUtils';

// const useMutate = (url, method, inputValue, ...rest) => {
//   const queryClient = useQueryClient();
//   const nav = useNavigate();
//   const mutateData = new Http(url)[method];
//   const { mutate, data } = useMutation(mutateData);
//   const dispatch = useDispatch();

//   const handleMutation = e => {
//     e.stopPropagation();
//     mutate(inputValue, {
//       onSuccess: data => {
//         queryClient.invalidateQueries();
//         [...rest].forEach(el => el(e));

//         if (url === 'signin') {
//           StorageUtils.signIn(data);
//           dispatch(updateUserId(data.user.id));
//           nav('/main');
//         }
//       },
//     });
//   };

//   return { handleMutation, data };
// };

// export default useMutate;
