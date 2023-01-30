import React from 'react';
import { TextField as MuiTextField } from '@mui/material';
import './index.css';

export function TextField({ label, className }) {
  return (
    <MuiTextField
      className={className}
      id="filled-basic"
      label={label}
      variant="filled"
      sx={{
        color: 'text.white',
        borderRadius: '.8rem',
        overflow: 'hidden',
        fontSize: '1.4rem',
        '&::after': {
          borderBottom: '1px solid #fff'
        }
      }}
    />
  );
}
