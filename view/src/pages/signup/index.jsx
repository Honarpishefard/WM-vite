import React from 'react';
import { Box, Typography } from '@mui/material';
import { TextField, WhiteButton } from 'components';
import Logo from '../../assets/images/W&M.svg';
import { ShowHidePassword } from 'components/shared/ShowHidePassword';
import { Link } from 'react-router-dom';

export function SignUp() {
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
      <Typography sx={{ color: 'text.white', fontSize: '2.5rem', fontWeight: '500' }}>
        Sign up to
      </Typography>
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
        <TextField className="input" label="Useranme" />
        <TextField className="input" label="E-mail" />
        <TextField className="input" label="Password" />
        <ShowHidePassword label="repeat password" />
      </Box>
      <WhiteButton>Sign up</WhiteButton>
      <Typography sx={{ color: 'text.white', fontSize: '1.6rem', fontWeight: '400', paddingY: '2rem' }}>Already have an account? <Link to='/login'>Login</Link></Typography>
    </Box>
  );
}
