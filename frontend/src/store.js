import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';
import examSliceReducer from './slices/examSlice';
import subjectSliceReducer from './slices/subjectSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    exam: examSliceReducer,
    subject: subjectSliceReducer,
  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
