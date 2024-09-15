import { ContentLayout, TopNavBar } from '@components/common';

import { Loader } from '@components/common/Loader';
import { Post } from '@components/common/Post';
import { Stack } from '@mui/material';
import { useGetAllPostsQuery } from 'src/services/postsApi';

export const Home = () => {
  const { data: postsResponse, isLoading } = useGetAllPostsQuery();

  return (
    <>
      <TopNavBar />
      <ContentLayout>
        {isLoading && <Loader />}

        {postsResponse?.data && (
          <Stack gap="20px">
            {postsResponse.data.map((post) => (
              <Post {...post} key={post.id} />
            ))}
          </Stack>
        )}
      </ContentLayout>
    </>
  );
};
