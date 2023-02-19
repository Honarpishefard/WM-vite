import { Typography, Box, Grid } from '@mui/material';
import { BlackButton, WhiteButton } from 'components';
import { useFindPath } from 'hooks/useFindPath';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function ProductGen(list) {
  const img = {
    width: 'auto%',
    maxHeight: '30rem'
  };

  const navigate = useNavigate();
  const path = useFindPath();
  const [product, setProduct] = useState([]);
  console.log(product);

  return list.map((i) => {
    return (
      <Grid
        item
        xs={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        <Box
          onClick={(e) => {
            setProduct(e.currentTarget.id)
            navigate(path + '/' + e.currentTarget.id);
          }}
          id={i.id}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '90%',
            height: '100%'
          }}>
          <img src={i.image} alt="" style={img} />
          <Box sx={{ display: 'flex', alignItems: 'center', width: '90%', paddingY: '1rem' }}>
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
                      border: '.5px solid #888',
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
        </Box>

        <Box sx={{ display: 'flex', gap: '2rem', paddingY: '1rem', width: '90%' }}>
          <WhiteButton onClick={() => console.log('buy now')}>Buy now</WhiteButton>
          <BlackButton onClick={() => console.log('add to cart')}>Add to cart</BlackButton>
        </Box>
      </Grid>
    );
  });
}
