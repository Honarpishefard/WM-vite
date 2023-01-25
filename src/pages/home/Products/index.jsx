import { Typography, Box, Grid } from '@mui/material';
import { BlackButton, WhiteButton } from 'components';
import React from 'react';

export function Products({ pic, title, children, oldPrice, newPrice }) {
  return (
    <Grid item xs={3}>
      <img src={pic} alt="" />
      <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '1.5rem'}}>
        <Typography
          sx={{ color: 'text.white', fontWeight: '600', fontSize: '3rem', flexGrow: '1' }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', gap: '1rem', paddingRight: '3rem' }}>{children}</Box>
      </Box>
      <Box sx={{ display: 'flex', gap: '2rem', paddingY: '2rem' }}>
        <Typography sx={{ color: 'text.white', fontWeight: '400', fontSize: '2rem' }}>
          {oldPrice}
        </Typography>
        <Typography
          sx={{
            color: 'main.lightGray',
            fontWeight: '400',
            fontSize: '2rem',
            textDecorationLine: 'line-through'
          }}>
          {newPrice}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: '3rem', paddingTop: '2rem' }}>
        <WhiteButton>Buy now</WhiteButton>
        <BlackButton>Add to cart</BlackButton>
      </Box>
    </Grid>
  );
}
