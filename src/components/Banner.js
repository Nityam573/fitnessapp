import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

import BannerImage from '../assets/images/banner1.jpg';

const Banner = () => {
  return (
    <Box position='relative' sx={{mt:{lg:'212px',xs:'70px'},ml:{sm:'50px'}}} px='20px'>
      <Typography color='red' fontWeight='Bold' fontSize="25px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'40px'}}} mb='23px' mt='20px'>
        Wake Up King <br /> Go To GYM
      </Typography>
      <Typography fontSize='22px' lineHeight='40px' mb={4}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
      <Button variant='contained' style={{color:'white',backgroundColor:'#ff2625',padding:'10px'}} href="#exercises">Explore Exercises</Button>
      <Typography fontWeight={600} color='#FF3231'sx={{ opacity: '0.12',display:{lg:'block',xs:'none'},fontSize:'200px'}}>Exercise</Typography>
      <img src={BannerImage} alt='banner' className='banner-image' />
    </Box>
  )
}

export default Banner;
