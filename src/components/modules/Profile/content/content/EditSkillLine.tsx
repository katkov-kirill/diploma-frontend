import { Box } from '@mui/material';
import { Text } from '@components/common';
import { Skill } from 'src/types';

export const EditSkillLine = ({
  skill,
  index,
  onClick,
}: {
  skill: Skill;
  index: any;
  onClick: () => void;
}) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'transparent',
          padding: '10px',
          border: '1px solid #8A8F98',
          borderRadius: '8px',
          height: '42px',
        }}
      >
        {skill.name}
      </Box>
    </>
  );
};
