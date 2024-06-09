import React from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button';

type Props = ButtonProps & {
  $variant: 'primary' | 'secondary';
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({
  $variant,
  children,
  ...otherProps
}) => {
  return (
    <MuiButton
      variant={$variant === 'primary' ? 'contained' : 'outlined'}
      {...otherProps}
      sx={{
        textTransform: 'none',
        fontFamily: 'Archivo',
        padding: '16px',
        fontSize: '16px',
        fontWeight: 600,
        backgroundColor:
          $variant === 'secondary' ? 'secondary.main' : undefined,
        border: $variant === 'secondary' ? '2px solid #5D6AD1' : undefined,
        borderRadius: '10px',
        ':hover': {
          backgroundColor: $variant === 'secondary' ? 'bg.light' : undefined,
          borderWidth: '2px',
        },
      }}
    >
      {children}
    </MuiButton>
  );
};
