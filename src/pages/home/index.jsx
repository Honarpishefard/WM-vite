import React from 'react';
import { Header, Footer } from 'layout';
import { Box, Typography, Grid, Container } from '@mui/material';
import homePageCards from '../../db/data';
import { Hero } from './heroSec';
import { CategoryCard } from './CategoryCards';
import { Products } from './Products';
import tshirt from './../../assets/images/homeProduct1.png';
import tie from './../../assets/images/homeProduct2.png';
import furCoat from './../../assets/images/homeProduct3.png';
import { BlackButton } from 'components';


export function Home() {
  const cardGenerator = homePageCards().map((item) => {
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
        <Box sx={{ display: 'flex', gap: '16rem' }}>
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
            <Products title='T-shirt' pic={tshirt} oldPrice={'$50'} newPrice={'$30'}>
                <Box sx={{ borderRadius: '50%', backgroundColor: '#2A282A', width: '2rem', height: '2rem' }} />
                <Box sx={{ borderRadius: '50%', backgroundColor: '#E5E5E5', width: '2rem', height: '2rem' }} />
            </Products>
            <Products title='Tie' pic={tie} oldPrice={'$50'} newPrice={'$45'}>
            <Box sx={{ borderRadius: '50%', backgroundColor: '#348B96', width: '2rem', height: '2rem' }} />
                <Box sx={{ borderRadius: '50%', backgroundColor: '#963434', width: '2rem', height: '2rem' }} />
                <Box sx={{ borderRadius: '50%', backgroundColor: '#423496', width: '2rem', height: '2rem' }} />  
            </Products>
            <Products title='Fur Coat' pic={furCoat} oldPrice={'$200'} newPrice={'$120'}>
                <Box sx={{ borderRadius: '50%', backgroundColor: '#D9C1AA', width: '2rem', height: '2rem' }} />
                <Box sx={{ borderRadius: '50%', backgroundColor: '#F1EEA5', width: '2rem', height: '2rem' }} />
                <Box sx={{ borderRadius: '50%', backgroundColor: '#F8B2FA', width: '2rem', height: '2rem' }} />    
            </Products>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
