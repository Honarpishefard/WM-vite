import React from 'react';
import { Header, Footer } from 'layout';
import { Box, Typography, Grid, Container } from '@mui/material';
import { homePageCategories, homePageProducts } from 'db/data';
import { Hero } from './heroSec';
import { CategoryCard } from './CategoryCards';
import { Products } from './Products';
import { BlackButton } from 'components';
import { StyleYourLife } from './StyleYourLifeSec';
import { CasualStyle, MansBAlance, Sales } from './EndSec';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchProducts } from 'api/services/fetchProducts';


export function Home() {
  const cardGenerator = homePageCategories().map((item) => {
    return (
      <CategoryCard backgroundImg={item.image}>
        <Box sx={{ padding: '2rem' }}>
          <Typography
            sx={{
              color: 'text.white',
              fontSize: '2.7rem',
              fontWeight: '700'
            }}>
            {item.title}
          </Typography>
          <Typography
            sx={{
              color: 'main.lightGray',
              fontSize: '1.5rem',
              fontWeight: '500'
            }}>
            {item.sub}
          </Typography>
        </Box>
      </CategoryCard>
    );
  });

  const productGen = homePageProducts().map((item) => {
    return (
      <Products title={item.title} pic={item.image} oldPrice={item.oldPrice} newPrice={item.newPrice}>
        {item.colors.map((i) => {
          return <Box sx={{ borderRadius: '50%', backgroundColor: i, width: '2rem', height: '2rem' }} />
          })}
      </Products>
    )
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
    // console.log(info)
  }, []);


  return (
    <>
      <Header />
      <Hero />
      <Container sx={{ backgroundColor: 'main.black' }}>
        <Grid
          container
          sx={{ display: 'flex', gap: '3rem', flexWrap: 'nowrap', paddingBottom: '6rem' }}>
          {cardGenerator}
        </Grid>
        <Box sx={{ display: 'flex', gap: '16rem', paddingY: '4rem' }}>
          <Typography sx={{ fontWeight: '700', fontSize: '6.4rem', color: 'text.white', lineHeight: '7rem', paddingLeft: '1rem' }}>
            Jeans & <Box sx={{ fontWeight: '700', fontSize: '6.4rem', color: 'main.lightGray' }}>Professional</Box>
          </Typography>
          <Typography sx={{ color: 'main.lightGray', fontWeight: '400', fontSize: '1.6rem' }}>
            Don’t be into trends. Don’t make fashion own you, but you but you desicide what you are
            what you want to express by the ways you dress and the wayto live. what you wear is how
            you present yourself to the world, especially todya, when human contacts are so qick.,
            fashion is instat laguage.
            <br />
            Fashion is part of the daily air and it changes all the time, with all the events. You
            can even see the approaching of a revoluation in clothes.
            <br/>
            One is never over-dressed or
            under-dressed with a Little Black Dress.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'end', paddingTop: '10rem' }}>
          <BlackButton bg="#329" margin='0 100%'>MORE</BlackButton>
        </Box>
        <Grid Container sx={{ display: 'flex', gap: '3rem', justifyContent: 'center', paddingX: '5rem', marginY: '5rem' }}>
          {productGen}
        </Grid>
      </Container>
      <StyleYourLife />
      <MansBAlance />
      <CasualStyle />
      <Sales />
      <Footer />
    </>
  );
}
