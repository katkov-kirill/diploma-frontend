import { ContentLayout, TopNavBar } from '@components/common';

import { Loader } from '@components/common/Loader';
import { Post } from '@components/common/Post';
import { Stack } from '@mui/material';
import { useGetPostsFeedQuery } from 'src/services/postsApi';
import { useAppSelector } from 'src/hooks';
import { RootState } from 'src/store/store';

export const Home = () => {
  const user = useAppSelector((state: RootState) => state.user);
  const { data: postsResponse, isLoading } = useGetPostsFeedQuery(user.user?.id as string);

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
