import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo from '../../assets/images/W&M.svg';
import Arrow from '../../assets/images/Arrow.svg';
import { DropDownMenu } from './DropDownMenu';

export function Header() {
    const headerItems = {
        color: 'text.white',
        fontWeight: '500',
        fontSize: '1.4rem',
        lineHeight: '20px',
        cursor: 'pointer',
        '&:hover': {
            color: 'main.superLightGray',
        },
    };

    return (
        <Box>
            <Box
                component="header"
                sx={{
                    backgroundColor: 'main.black',
                    display: 'flex',
                    alignItems: 'center',
                    paddingY: '3rem',
                    paddingX: '6rem',
                }}>
                <img src={Logo} alt="W&M" />
                <Box
                    sx={{
                        display: 'flex',
                        flexGrow: '1',
                        paddingX: '10rem',
                        gap: '3.5rem',
                        alignItems: 'center',
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}>
                        <DropDownMenu>Man’s</DropDownMenu>
                        <img src={Arrow} alt="" />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}>
                        <DropDownMenu>Woman’s</DropDownMenu>
                        <img src={Arrow} alt="" />
                    </Box>
                    <Typography sx={headerItems}>Kid’s</Typography>
                    <Typography sx={headerItems}>Winter</Typography>
                    <Typography sx={headerItems}>Summer</Typography>
                    <Typography sx={headerItems}>New Collections</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '5rem' }}>
                    <Typography sx={headerItems}>Cart</Typography>
                    <Typography sx={headerItems}>Log in/Sign up</Typography>
                </Box>
            </Box>
        </Box>
    );
}
