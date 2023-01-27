import React from 'react';
import { Box, Typography } from '@mui/material';
import { BlackButton } from 'components';
import shoes from 'assets/images/shoes.png';
import sale from 'assets/images/sale.jpg';

export function MansBAlance() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          paddingX: '4rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3.5rem'
        }}>
        <Typography
          sx={{
            color: 'text.white',
            fontWeight: '700',
            fontSize: '6.4rem',
            lineHeight: '7rem',
            textAlign: 'center'
          }}>
          New Balance <br />{' '}
          <Box component="span" sx={{ color: 'main.lightGray' }}>
            Man’s
          </Box>
        </Typography>
        <Typography
          sx={{
            color: 'main.lightGray',
            fontWeight: '700',
            fontSize: '1.8rem',
            textAlign: 'center',
            maxWidth: '85%'
          }}>
          What would it feel like to lace a pair of clouds to your feet? You'll never know, but we
          think the Nike Wearallday is pretty close. Featuring plush padding around the ankle, a
          thick, downy tongue and unbelievably soft foam underfoot, this sport-inspired shoe is the
          embodiment of comfort. Mesh on the upper adds breathability that lasts, while the rubber
          Waffle outsole gives you traction every day.
        </Typography>
        <BlackButton>Open now</BlackButton>
      </Box>
      <img src={shoes} />
    </Box>
  );
}

export function CasualStyle() {
  return (
    <Box
      sx={{ display: 'flex', paddingX: '5rem', justifyContent: 'space-around', paddingY: '8rem' }}>
      <Typography
        sx={{ color: 'text.white', fontWeight: '700', fontSize: '6.4rem', lineHeight: '7rem' }}>
        Casual <br />{' '}
        <Box component="span" sx={{ color: 'main.lightGray' }}>
          Style
        </Box>
      </Typography>
      <Box
        sx={{
          maxWidth: '32%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
        <Typography sx={{ color: 'main.lightGray', fontWeight: '500', fontSize: '1.6rem' }}>
          shoes transform your body language and attitude. They lift your physically emotionally.
        </Typography>
        <Typography sx={{ color: 'main.lightGray', fontWeight: '500', fontSize: '1.6rem' }}>
          Style is the only thing you can’t buy. It’s not in a shopping bag, a label, or a price
          tag, It’s something reflected from our soul to the outside world---an emotion.
        </Typography>
      </Box>
    </Box>
  );
}

export function Sales() {
  return (
    <Box sx={{ display: 'flex', paddingTop: '5rem', paddingBottom: '10rem', alignItems: 'center' }}>
      <img src={sale} alt="" />
      <Box
        sx={{
          borderRadius: '50%',
          background: '#5F5F5F',
          filter: 'blur(100px)',
          width: '254px',
          height: '254px',
          zIndex: '-1'
        }}
      />
      <Box sx={{ textAlign: 'end', paddingX: '2rem' }}>
        <Typography sx={{ color: 'text.white', fontWeight: '700', fontSize: '15rem', lineHeight: '18rem' }}>50%</Typography>
        <Typography sx={{ color: 'text.white', fontWeight: '700', fontSize: '15rem', lineHeight: '18rem' }}>Special</Typography>
        <Typography sx={{ color: 'text.white', fontWeight: '500', fontSize: '3.6rem', paddingTop: '2rem' }}>Offers You Love</Typography>
      </Box>
    </Box>
  );
}
