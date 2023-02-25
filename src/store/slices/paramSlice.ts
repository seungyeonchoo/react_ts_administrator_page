import { createSlice } from '@reduxjs/toolkit';

const paramSlice = createSlice({
  name: 'params',
  initialState: {
    userParams: { _embed: 'accounts', q: '' },
  },
  reducers: {
    updateUserParams: (state, action) => {
      state.userParams = { ...state.userParams, ...action.payload };
    },
  },
});

export const { updateUserParams } = paramSlice.actions;
export default paramSlice.reducer;
