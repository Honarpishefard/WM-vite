import { Box, Typography } from '@mui/material';
import { WhiteButton } from 'components';
import React from 'react';
import { SearchBox } from './SearchBox';
import { Slider } from './Slider';

export function Hero() {
    return (
        <Box sx={{ backgroundColor: 'main.black', paddingBottom: '3rem' }}>
            <Slider>
                <Box sx={{ paddingX: '15%', paddingTop: '10vh' }}>
                    <Typography
                        sx={{
                            color: 'main.lightGray',
                            fontWeight: 'bold',
                            fontSize: '2.2rem',
                        }}>
                        Be extra
                    </Typography>
                    <Typography
                        sx={{
                            color: 'main.superLightGray',
                            fontWeight: 'bold',
                            fontSize: '4rem',
                            marginBottom: '3rem',
                            lineHeight: '4rem',
                        }}>
                        Morden <br /> Cloths
                    </Typography>
                    <Typography
                        sx={{
                            color: 'main.lightGray',
                            fontWeight: '500',
                            fontSize: '1.4rem',
                            maxWidth: '38rem',
                        }}>
                        Fashion is part of the daily air and it changes all the
                        time with all the events. You can even see the
                        approaching of a revoluation in clothes...
                    </Typography>
                    <SearchBox />
                    <WhiteButton>collections</WhiteButton>
                </Box>
                <p>hi</p>
                <p>bye</p>
            </Slider>
        </Box>
    );
}
