import { Box, Typography } from '@mui/material';
import React from 'react';
import { EmailBox } from './emailBox';

export function Footer() {
    const FooterTitles = {
        color: 'text.white',
        fontSize: '2.6rem',
        fontWeight: 'bold',
        lineHeigh: '3.2rem',
    };

    const FooterText = {
        color: 'main.lightGray',
        fontSize: '1.6rem',
        lineHeight: '2.4rem',
        fontWeight: '700',
        cursor: 'pointer',
    };

    return (
        <Box
            sx={{
                display: 'flex',
                backgroundColor: 'main.black',
                justifyContent: 'space-evenly',
                paddingX: '1rem',
                paddingY: '4rem',
                borderTop: '#5F5F5F 1px solid',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                }}>
                <Typography sx={FooterTitles}>Our promises</Typography>
                <Typography sx={FooterText}>We stary committed</Typography>
                <Typography sx={FooterText}>
                    we deliver pan world wide
                </Typography>
                <Typography sx={FooterText}>
                    certification & transparecy
                </Typography>
                <Typography sx={FooterText}>
                    Lifetime free Maintenace
                </Typography>
                <Typography sx={FooterText}>Qulity Check</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                }}>
                <Typography sx={FooterTitles}>Help</Typography>
                <Typography sx={FooterText}>FAQ</Typography>
                <Typography sx={FooterText}>Privacy Policy</Typography>
                <Typography sx={FooterText}>Terms & conditions</Typography>
                <Typography sx={FooterText}>Shipping Policy</Typography>
                <Typography sx={FooterText}>Return Policy</Typography>
                <Typography sx={FooterText}>Order</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                }}>
                <Typography sx={FooterTitles}>Contact Us</Typography>
                <Typography sx={FooterText}>abc@gmail.com</Typography>
                <Typography sx={FooterText}>Toll Free +987654321</Typography>
                <Typography sx={FooterText}>(10:30 AM- 7:30 PM)</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                }}>
                <Typography sx={FooterTitles}>Get On the List</Typography>
                <Typography sx={FooterText}>
                    Don’t miss any updates of our offers
                </Typography>
                <EmailBox />
            </Box>
        </Box>
    );
}
