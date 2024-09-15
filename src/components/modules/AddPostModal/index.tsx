import { Avatar, Box, Modal, Stack } from '@mui/material';
import { Button, Dropdown, Input, Text, Textarea } from '@components/common';

import Attachment from '@assets/icons/attachment.svg';
import React from 'react';
import { useAppSelector } from 'src/hooks';
import { useCreatePostMutation } from 'src/services/postsApi';

type Props = {
  isOpen: boolean;
  handleClose?: () => void;
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '995px',

  bgcolor: '#16191E',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};

export const AddPostModal: React.FC<Props> = ({ isOpen, handleClose }) => {
  const userData = useAppSelector((state) => state.user);
  const [createPost] = useCreatePostMutation();
  const [formInputs, setFormInputs] = React.useState({
    title: '',
    textContent: '',
    visibility: '',
    fileContent: null,
  });

  console.log('formInputs: ', formInputs);

  const handleChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    setFormInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const onLoad = (fileString: string | ArrayBuffer | null) => {
  //   console.log(fileString);
  //   setFormInputs((prev) => ({ ...prev, fileContent: fileString as string }));
  // };

  // const getBase64 = (file: File) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     onLoad(reader.result);
  //   };
  // };

  // const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files;
  //   if (files && files[0]) {
  //     const file = files[0];
  //     getBase64(file);
  //   }
  // };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setFormInputs((prev) => ({ ...prev, fileContent: e.target.files[0] }));
  };

  const handleChangeVisibility = (option: { value: string; label: string }) => {
    setFormInputs((prev) => ({ ...prev, visibility: option?.value ?? '' }));
  };

  // const handlePublish = async () => {
  //   try {
  //     await createPost({
  //       title: formInputs.title,
  //       content: formInputs.textContent,
  //       user_id: userData?.user?.id,
  //       images: formInputs.fileContent,
  //       status: 'published',
  //       visibility: formInputs.visibility,
  //     });
  //   } catch (error) {
  //     console.error('Post creation failed:', error);
  //   }
  // };

  const handlePublish = async () => {
    try {
      const formData = new FormData();
      formData.append('title', formInputs.title);
      formData.append('content', formInputs.textContent);
      formData.append('user_id', userData?.user?.id);
      formData.append('status', 'published');
      formData.append('visibility', formInputs.visibility);

      if (formInputs.fileContent) {
        formData.append('images', [formInputs.fileContent]);
      }

      console.log('formData title', formData.get('title'));
      console.log('formDaTA images: ', formData.get('images'));

      await createPost(formData);
    } catch (error) {
      console.error('Post creation failed:', error);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack direction="row" alignItems="center" gap="10px" mb="20px">
          <Avatar
            src="/path-to-user-avatar.png"
            alt={userData.user?.email}
            sx={{
              bgcolor: '#6C63FF',
              width: 50,
              height: 50,
            }}
          />
          <Text>{userData?.user?.email}</Text>
        </Stack>
        <Stack gap="20px">
          <Box maxWidth="400px">
            <Dropdown
              options={[
                { label: 'Public', value: 'public' },
                { label: 'Subscribers', value: 'private' },
              ]}
              //@ts-ignore
              onChange={handleChangeVisibility}
              isClearable
              placeholder="Who can view this post?"
            />
          </Box>
          <Input
            name="title"
            type="text"
            placeholder="Post title"
            onChange={handleChange}
          />
          <Textarea
            name="textContent"
            className="h-[200px]"
            placeholder="Post contents"
            onChange={handleChange}
          />
          <Stack direction="row" justifyContent="space-between">
            <label htmlFor="fileContent">
              <Box
                component="img"
                width="20px"
                height="20px"
                src={Attachment}
                alt="attachment"
                sx={{ ':hover': { opacity: '0.8', cursor: 'pointer' } }}
              />
            </label>
            <Input
              id="fileContent"
              name="fileContent"
              type="file"
              className="mb-[16px] h-[80px] hidden"
              onChange={handleChangeFile}
            />

            <Button $variant="primary" onClick={handlePublish}>
              <Text fontWeight={600}>Publish</Text>
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};
