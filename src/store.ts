import { configureStore } from '@reduxjs/toolkit';
import snackbarReducer from './features/common/slices/snackbarSlice';

export const store = configureStore({
  reducer: {
    snackbar: snackbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
