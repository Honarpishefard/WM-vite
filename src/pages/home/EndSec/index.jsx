import React from 'react';
import { Box, Typography } from '@mui/material';
import { BlackButton } from 'components';
import shoes from 'assets/images/shoes.png';

export function EndSec() {
  return (
    <Box>
      <Box>
        <Typography>
          New Balance <br /> Man’s
        </Typography>
        <Typography>
          What would it feel like to lace a pair of clouds to your feet? You'll never know, but we
          think the Nike Wearallday is pretty close. Featuring plush padding around the ankle, a
          thick, downy tongue and unbelievably soft foam underfoot, this sport-inspired shoe is the
          embodiment of comfort. Mesh on the upper adds breathability that lasts, while the rubber
          Waffle outsole gives you traction every day.
        </Typography>
        <BlackButton>Open now</BlackButton>
      </Box>
      <img src={shoes}/>
    </Box>
  );
}
