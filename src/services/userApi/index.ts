import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://165.22.84.32/api' }),
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
  }),
});

export const { useRegisterMutation, useLoginMutation } = userApi;
