import { Post } from '@components/common/Post';
import { createApi } from '@reduxjs/toolkit/query/react';
import { getBaseQuery } from '../baseQuery';

const baseQuery = getBaseQuery(true);

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery,
  endpoints: (builder) => ({
    getAllPosts: builder.query<{ data: Post[] }, void>({
      query: () => ({
        url: 'posts',
        method: 'GET',
      }),
    }),
    createPost: builder.mutation({
      query: (formData) => ({
        url: 'posts',
        method: 'POST',
        body: {
          ...formData,
        },
      }),
    }),
  }),
});

export const { useGetAllPostsQuery, useCreatePostMutation } = postsApi;
