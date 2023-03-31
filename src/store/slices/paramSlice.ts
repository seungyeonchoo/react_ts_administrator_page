import { createSlice } from '@reduxjs/toolkit';

export const initialUserParams = {
  _embed: 'accounts',
  q: '',
  is_staff: null,
  is_active: null,
  _limit: 20,
  _page: 1,
};

export const initialAccountParams = {
  _expand: 'user',
  number_like: '',
  is_active: null,
  broker_id: null,
  status: null,
  _limit: 20,
  _page: 1,
};

const paramSlice = createSlice({
  name: 'params',
  initialState: { userParams: initialUserParams, accountParams: initialAccountParams },
  reducers: {
    updateUserParams: (state, action) => {
      state.userParams = { ...state.userParams, ...action.payload };
    },
    updateAccountParams: (state, action) => {
      state.accountParams = { ...state.accountParams, ...action.payload };
    },
  },
});

export const { updateUserParams, updateAccountParams } = paramSlice.actions;
export default paramSlice.reducer;
