import React from 'react';
import { Box, Typography } from '@mui/material';
import { ShowHidePassword, TextField, WhiteButton } from 'components';
import Logo from '../../assets/images/W&M.svg';

export function Login() {
  const logoStyle = {
    width: '25%',
    marginBottom: '5%'
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        height: '100vh',
        gap: '2.5rem'
      }}>
      <Typography sx={{ color: 'text.white', fontSize: '2.5rem', fontWeight: '500' }}>Login to</Typography>
      <img src={Logo} alt="W&M" style={logoStyle} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '50rem',
          gap: '2rem',
          minWidth: '30rem',
          width: '100vw'
        }}>
        <TextField label="Useranme" />
        <ShowHidePassword label="Password"/>
      </Box>
      <WhiteButton>Login</WhiteButton>
    </Box>
  );
}
