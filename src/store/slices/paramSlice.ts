import { createSlice } from '@reduxjs/toolkit';

const initialUserParams = {
  _embed: 'accounts',
  q: '',
  is_staff: null,
  is_active: null,
  _limit: 20,
  _page: 1,
};

const paramSlice = createSlice({
  name: 'params',
  initialState: { userParams: initialUserParams },
  reducers: {
    updateUserParams: (state, action) => {
      state.userParams = { ...state.userParams, ...action.payload };
    },
  },
});

export const { updateUserParams } = paramSlice.actions;
export default paramSlice.reducer;
