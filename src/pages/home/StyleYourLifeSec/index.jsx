import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import style1 from 'assets/images/style1.jpg';
import style2 from 'assets/images/style2.jpg';
import { WhiteButton } from 'components';

export function StyleYourLife() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingY: '10rem' }}>
      <Box sx={{ position: 'absolute', width: '100%', paddingX: '8%', }}>
        <Typography
          sx={{
            color: 'text.white',
            fontWeight: '800',
            fontSize: '18rem',
            marginTop: '5%'
          }}>
          Style <br /> your life
        </Typography>
        <WhiteButton>Open Now</WhiteButton>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '22%' }}>
        <Box>
          <img src={style1} alt="" />
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${style2})`,
            height: '494px',
            width: '307px',
            display: 'flex',
            alignItems: 'end'
          }}>
          <Button
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(5px)',
              color: 'main.superDarkGray',
              fontWeight: '500',
              fontSize: '1.8rem',
              borderRadius: '0 2rem 0 0',
              padding: '2.5rem 2rem'
            }}>
            Winter Collections
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
