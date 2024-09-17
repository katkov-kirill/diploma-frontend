import Placeholder from '@assets/default_placeholder.png';
import React from 'react';
import { Stack } from '@mui/material';
import { Text } from '../Text';
import { formatDistance } from 'date-fns';

export type Post = {
  content: string;
  created_at: string;
  id: string;
  images: string[];
  status: string;
  title: string;
  user: {
    first_name: string;
    id: string;
    last_name: string;
    role: string;
  };
  visibility: string;
};

export const Post: React.FC<Post> = ({
  content,
  created_at,
  images,
  title,
  user,
}) => {
  return (
    <Stack sx={{ bgcolor: '#28282C' }} borderRadius="15px" overflow="hidden">
      <img src={Object.values(images)?.[0] ?? Placeholder} />
      <Stack p="20px">
        <Stack direction="row" justifyContent="space-between">
          <Text variant="h5" fontWeight={700} maxWidth="80%">
            {title}
          </Text>
          <Text>
            {user.first_name},&nbsp;
            {formatDistance(new Date(created_at), new Date(), {
              addSuffix: true,
            })}
          </Text>
        </Stack>
        <Text>{content}</Text>
      </Stack>
    </Stack>
  );
};
