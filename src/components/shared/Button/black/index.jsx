import React from 'react';
import { Button as MuiButton } from '@mui/material';

export function BlackButton(props) {
    return (
        <MuiButton
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                lineHeight: '2rem',
                backgroundColor: 'main.darkGray',
                borderRadius: '3rem',
                color: 'text.white',
                fontSize: '1rem',
                fontWeight: '700',
                paddingX: '2rem',
                paddingY: '.5rem',
                '&:hover': {
                    backgroundColor: 'main.lightGray',
                    color: 'text.white',
                },
            }}
            {...props}
        />
    );
}
