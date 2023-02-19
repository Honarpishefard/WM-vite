import { Box, Input } from '@mui/material';
import React from 'react';
import searchIcon from '../../../../assets/images/search.svg';

export function SearchBox() {
    return (
        <Box
            sx={{
                backgroundColor: 'main.gray',
                borderRadius: '1.5rem',
                maxWidth: '50rem',
                display: 'flex',
                margin: '6rem 0',
            }}>
            <img src={searchIcon} alt="" style={{ padding: '1.6rem' }} />
            <Input
                sx={{
                    color: 'text.white',
                    borderRadius: '1.5rem 0',
                    overflow: 'hidden',
                    fontSize: '1.4rem',
                    fontWeight: '400',
                    width: '100%',
                    '&::after': {
                        borderBottom: '1px solid #fff',
                    },
                }}
                placeholder="search"
            />
        </Box>
    );
}
