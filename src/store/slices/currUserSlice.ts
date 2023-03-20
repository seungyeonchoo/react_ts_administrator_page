import { createSlice } from '@reduxjs/toolkit';

const currUserSlice = createSlice({
  name: 'params',
  initialState: { currEmail: '' },
  reducers: {
    updateUserEmail: (state, action) => {
      state.currEmail = action.payload;
    },
  },
});

export const { updateUserEmail } = currUserSlice.actions;
export default currUserSlice.reducer;
