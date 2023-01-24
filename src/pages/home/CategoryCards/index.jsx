/* eslint-disable react/prop-types */
import { Grid } from '@mui/material';
import React from 'react';

export function CategoryCard({ children, backgroundImg }) {
    return (
        <Grid
            item
            xs={3}
            sx={{
                backgroundImage: `linear-gradient(180deg, rgba(1, 1, 1, 0.26) 0%, #010101 100%),url(${backgroundImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                minHeight: '45rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'end',
            }}>
            {children}
        </Grid>
    );
}
