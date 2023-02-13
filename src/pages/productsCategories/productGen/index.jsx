import { Typography, Box, Grid } from '@mui/material';
import { BlackButton, WhiteButton } from 'components';

export function ProductGen(list) {
  const img = {
    width: 'auto%',
    maxHeight: '30rem',
}

  return list.map((i) => {
    return (
      <Grid
        item
        xs={3}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src={i.image} alt="" style={img} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            paddingTop: '1.5rem',
            width: '90%',
            paddingX: '2rem'
          }}>
          <Typography
            sx={{ color: 'text.white', fontWeight: '600', fontSize: '1.8rem', flexGrow: '1' }}>
            {i.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: '.8rem', paddingX: '.5rem' }}>
            {i.colors?.map((backgroundColor) => {
              return (
                <Box
                  sx={{
                    display: 'flex',
                    backgroundColor: { backgroundColor },
                    borderRadius: '50%',
                    width: '1rem',
                    height: '1rem'
                  }}
                />
              );
            })}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '2rem', paddingY: '1rem', width: '90%' }}>
          <Typography sx={{ color: 'text.white', fontWeight: '400', fontSize: '1.6rem' }}>
            {i.newPrice}
          </Typography>
          <Typography
            sx={{
              color: 'main.lightGray',
              fontWeight: '400',
              fontSize: '1.6rem',
              textDecorationLine: 'line-through'
            }}>
            {i.oldPrice}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '2rem', paddingY: '1rem', width: '9F0%' }}>
          <WhiteButton>Buy now</WhiteButton>
          <BlackButton>Add to cart</BlackButton>
        </Box>
      </Grid>
    );
  });
}
