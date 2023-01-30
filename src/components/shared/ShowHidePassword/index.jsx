import { useState } from 'react';
import { Box, TextField } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const ShowHidePassword = ({ props, label }) => {
  const [hide, setHide] = useState(false);

  const toggle = () => {
    setHide((prev) => !prev);
  };

  const style = { paddingRight: '1.5rem' };

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#161616',
        borderRadius: '.8rem',
        display: 'flex',
        alignItems: 'center'
      }}>
      <TextField
        type={!hide ? 'password' : 'text'}
        {...props}
        required
        id="filled-basic"
        label={label}
        variant="filled"
        sx={{
          color: 'text.white',
          flexGrow: '1',
          borderRadius: '.8rem',
          overflow: 'hidden',
          fontSize: '1.4rem',
          '&::after': {
            borderBottom: '1px solid #fff'
          }
        }}
      />
      <i onClick={toggle} style={style}>
        {hide ? (
          <VisibilityIcon sx={{ color: 'main.white' }} />) : (<VisibilityOffIcon sx={{ color: 'main.white' }} />)}
      </i>
    </Box>
  );
};
