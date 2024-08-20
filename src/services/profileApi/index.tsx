import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:80/api' }),
    endpoints: (builder) => ({
      getProfile: builder.query({
        query: (id) => `profile/${id}`,
        transformResponse: (response: any) => response.data
      }),
    }),
  });
  

export const {useGetProfileQuery  } = profileApi;
