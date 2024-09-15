import { createApi } from '@reduxjs/toolkit/query/react';
import { getBaseQuery } from '../baseQuery';

const baseQuery = getBaseQuery();

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
