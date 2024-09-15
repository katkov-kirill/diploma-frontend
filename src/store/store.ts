import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from 'src/services/postsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from '../services/userApi';
import userReducer from './userSlice';

// Or from '@reduxjs/toolkit/query/react'

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, postsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
