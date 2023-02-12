import React from 'react';
import { mansJackets } from 'db/data';
import { Typography, Box, Grid } from '@mui/material';
import { BlackButton, WhiteButton } from 'components';
import { Header } from 'layout';

const img = {
    width: 'auto%',
    maxHeight: '40rem'
}

function productGen(list) {
  return list.map((i) => {
    return (
      <Grid item xs={3} sm={4} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={i.image} alt="" style={img} />
        <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '1.5rem', width: '70%', paddingX: '2rem' }}>
          <Typography
            sx={{ color: 'text.white', fontWeight: '600', fontSize: '3rem', flexGrow: '1' }}>
            {i.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            {i.colors?.map((backgroundColor) => {
              return (
                <Box
                  sx={{
                    display: 'flex',
                    backgroundColor: { backgroundColor },
                    borderRadius: '50%',
                    width: '2rem',
                    height: '2rem'
                  }}
                />
              );
            })}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '2rem', paddingY: '2rem', width: '70%' }}>
          <Typography sx={{ color: 'text.white', fontWeight: '400', fontSize: '2rem' }}>
            {i.newPrice}
          </Typography>
          <Typography
            sx={{
              color: 'main.lightGray',
              fontWeight: '400',
              fontSize: '2rem',
              textDecorationLine: 'line-through'
            }}>
            {i.oldPrice}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '3rem', paddingY: '2rem', width: '70%' }}>
          <WhiteButton>Buy now</WhiteButton>
          <BlackButton>Add to cart</BlackButton>
        </Box>
      </Grid>
    );
  });
}

export function Jackets() {
  return (
    <>
      <Header />
      <Grid container rowSpacing={5} columnSpacing={{ xs: 6, sm: 2, md: 3 }} sx={{ display: 'flex', paddingX: '6rem', paddingY: '2rem' }}>{productGen(mansJackets())}</Grid>
    </>
  );
}

export function Shoes() {
  return <div>index</div>;
}

export function Tshirts() {
  return <div>index</div>;
}

export function Jeans() {
  return <div>index</div>;
}
