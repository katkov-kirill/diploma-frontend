import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from 'src/store/store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://165.22.84.32/api',
  //@ts-ignore
  prepareHeaders: (headers, { getState }: { getState: () => RootState }) => {
    const token = getState().user.token || localStorage.getItem('authToken');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (formData) => ({
        url: 'register',
        method: 'POST',
        body: {
          ...formData,
        },
      }),
    }),
    login: builder.mutation({
      query: (formData) => ({
        url: 'login',
        method: 'POST',
        body: {
          ...formData,
        },
      }),
    }),
    getCurrentUser: builder.query<{ user: any }, void>({
      query: () => ({
        url: 'user',
        method: 'GET',
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetCurrentUserQuery } =
  userApi;
