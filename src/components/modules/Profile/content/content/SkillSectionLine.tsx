import { Box } from '@mui/material';
import { Text } from '@components/common';
import { Skill } from 'src/types';

export const SkillSectionLine = ({
  skill,
  index,
  onClick
}: {
  skill: Skill;
  index: any;
  onClick: () => void;
}) => {
  return (
    <Box
      key={index}
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
        padding: '10px',
        border: '1px solid #8A8F98',
        borderRadius: '8px',
        height: '42px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <Text
        sx={{
          color: '#8A8F98',
          fontSize: '15px',
          fontWeight: 500,
          lineHeight: '10px'
        }}
      >
        {skill.name}
      </Text>
      <Text
        sx={{
          color: '#8A8F98',
          fontSize: '12px',
          fontWeight: 300,
        }}
      >
        {skill.level}/{skill.place}
      </Text>
    </Box>
  );
};
