import React from 'react'
import MuiButton, { ButtonProps } from '@mui/material/Button'

type Props = ButtonProps & {
  $variant: 'primary' | 'secondary' | 'transparent';
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
        padding: $variant === 'transparent' ? '8px' : '16px',
        fontSize: $variant === 'transparent' ? '12px' : '16px',
        fontWeight: 600,
        color: $variant === 'transparent' ? 'white' : undefined,
        justifyContent: $variant === 'transparent' ? 'flex-start' : undefined,
        backgroundColor:
          $variant === 'secondary' ? 'secondary.main'
            : $variant === 'transparent' ? 'transparent' : undefined,
        border: $variant === 'secondary' ? '2px solid #5D6AD1'
          : $variant === 'transparent' ? '2px solid #FFFFFF' : undefined,
        borderRadius: '10px',
        ':hover': {
          color: $variant === 'transparent' ? 'primary.main' : undefined,
          backgroundColor: $variant === 'secondary' ? 'bg.light' : undefined,
          borderWidth: '2px',
        },
      }}
    >
      {children}
    </MuiButton>
  )
}
