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
  user_id: string;
  visibility: string;
};

export const Post: React.FC<Post> = ({
  content,
  created_at,
  id,
  images,
  status,
  title,
  user_id,
  visibility,
}) => {
  return (
    <Stack sx={{ bgcolor: '#28282C' }} borderRadius="15px" overflow="hidden">
      <img src={Placeholder} />
      <Stack p="20px">
        <Stack direction="row" justifyContent="space-between">
          <Text variant="h5" fontWeight={700}>
            {title}
          </Text>
          <Text>
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
