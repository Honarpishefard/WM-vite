import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import './index.css';

export function EmailBox() {
    return (
        <Box
            sx={{
                paddingX: '2rem',
                paddingY: '.5rem',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'main.mediumGray',
                border: '1px solid transparent',
                borderRadius: '2rem',
                background:
                    'linear-gradient(to right, #2B2B2B, #2B2B2B), linear-gradient(to right, #464646 , #F5F5F5 , #464646)',
                backgroundClip: 'padding-box, border-box',
                backgroundOrigin: 'padding-box, border-box',
            }}>
            <TextField label="Emaill Address!" />
            <Button
                sx={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: 'text.white',
                    borderRadius: '1rem',
                    border: '1px solid transparent',
                    background:
                        'linear-gradient(to right, #0E0E0E, #0E0E0E), linear-gradient(to top, #676767, #F8F8F8 , #676767)',
                    backgroundClip: 'padding-box, border-box',
                    backgroundOrigin: 'padding-box, border-box',
                }}>
                Notify me
            </Button>
        </Box>
    );
}
