import { Post } from '@components/common/Post';
import { baseQuery } from '../baseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery,
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getAllPosts: builder.query<{ data: Post[] }, void>({
      query: () => ({
        url: 'posts',
        method: 'GET',
      }),
      providesTags: ['Posts'],
    }),
    createPost: builder.mutation({
      query: (formData) => ({
        url: 'posts',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const { useGetAllPostsQuery, useCreatePostMutation } = postsApi;
