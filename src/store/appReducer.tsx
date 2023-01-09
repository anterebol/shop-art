import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  gallery: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState: { ...initialState },
  reducers: {
    first: (state) => {},
  },
});

export default appSlice.reducer;
export const { first } = appSlice.actions;
