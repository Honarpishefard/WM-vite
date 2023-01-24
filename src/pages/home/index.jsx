import React from 'react';
import { Header, Footer } from 'layout';
import { Box, Typography, Grid, Container } from '@mui/material';
import homePageCards from '../../db/data';
import { Hero } from './heroSec';
import { CategoryCard } from './CategoryCards';

export function Home() {
    const cardGenerator = homePageCards().map((item) => {
        return (
            <CategoryCard backgroundImg={item.image}>
                <Box sx={{ padding: '2rem' }}>
                    <Typography
                        sx={{
                            color: 'text.white',
                            fontSize: '2.7rem',
                            fontWeight: '700',
                        }}>
                        {item.title}
                    </Typography>
                    <Typography
                        sx={{
                            color: 'main.lightGray',
                            fontSize: '1.5rem',
                            fontWeight: '500',
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
                <Grid container sx={{ display: 'flex', gap: '3rem', flexWrap: 'nowrap', paddingBottom: '6rem' }}>
                    {cardGenerator}
                </Grid>
            </Container>
            <Footer />
        </>
    );
}
