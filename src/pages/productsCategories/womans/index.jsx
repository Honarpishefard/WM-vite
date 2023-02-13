import React from 'react';
import { womansBags, womansCoats, womansDresses } from 'db/data';
import { Footer, Header } from 'layout';
import { ProductGen } from '../ProductGen';
import { Grid } from '@mui/material';

export function Coats() {
  return (
    <>
      <Header />
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ xs: 6, sm: 2, md: 3 }}
        sx={{ display: 'flex', paddingX: '6rem', paddingY: '2rem' }}>
        {ProductGen(womansCoats())}
      </Grid>
      <Footer />
    </>
  );
};

export function Dresses() {
  return (
    <>
      <Header />
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ xs: 6, sm: 2, md: 3 }}
        sx={{ display: 'flex', paddingX: '6rem', paddingY: '2rem' }}>
        {ProductGen(womansDresses())}
      </Grid>
      <Footer />
    </>
  );
};

export function Bags() {
  return (
    <>
      <Header />
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ xs: 6, sm: 2, md: 3 }}
        sx={{ display: 'flex', paddingX: '6rem', paddingY: '2rem' }}>
        {ProductGen(womansBags())}
      </Grid>
      <Footer />
    </>
  );
}
