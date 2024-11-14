import { createSlice } from '@reduxjs/toolkit';

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    open: false,
    message: '',
    type: 'info',
  },
  reducers: {
    showSnackbar: (state, action) => {
      const { message, type } = action.payload;
      state.open = true;
      state.message = message;
      state.type = type;
    },
    hideSnackbar: (state) => {
      state.open = false;
      state.message = '';
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
