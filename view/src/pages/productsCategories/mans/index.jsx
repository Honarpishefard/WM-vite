import React from 'react';
import { mansJackets, mansShoes, mansTshirts } from 'db/data';
import { Footer, Header } from 'layout';
import { ProductGen } from '../ProductGen';
import { Grid } from '@mui/material';

export function Jackets() {
  return (
    <>
      <Header />
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ xs: 6, sm: 2, md: 3 }}
        sx={{ display: 'flex', paddingX: '6rem', paddingY: '2rem' }}>
        {ProductGen(mansJackets())}
      </Grid>
      <Footer />
    </>
  );
}

export function Shoes() {
  return (
    <>
      <Header />
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ xs: 6, sm: 2, md: 3 }}
        sx={{ display: 'flex', paddingX: '6rem', paddingY: '2rem' }}>
        {ProductGen(mansShoes())}
      </Grid>
      <Footer />
    </>
  );
}

export function Tshirts() {
  return (
    <>
      <Header />
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ xs: 6, sm: 2, md: 3 }}
        sx={{ display: 'flex', paddingX: '6rem', paddingY: '2rem' }}>
        {ProductGen(mansTshirts())}
      </Grid>
      <Footer />
    </>
  );
}
