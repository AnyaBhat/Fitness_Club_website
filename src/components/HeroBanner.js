import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react';


import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
return (
    <Box sx={{mt:{lg:'212px',xs:'70px'},
    ml:{sm:'50px'}}} position="relative" p='20px'>
        <Typography color="#FF2625"
        fontWeight="600" fontSize="26px">
        Fitness Club
        </Typography>
        <Typography fontWeight={700}
        sx={{fontSize:{lg:'44px',xs:'40px'}}}
        mb='23px' mt='30px'>
        Sweat,Smile <br /> and Repeat
        </Typography>
        <Typography fontWeight='22px' lineHeight='35px' mb={4}>
        Check out the most effective exercises
        </Typography>
        <Button variant="contained" color='error'
        sx={{background:'#FF2625',
        padding:'10px'}} href='#exercise'>Explore Exercises</Button>

        <Typography
        fontWeight={600}
        color='#FF2625'
        sx={{
            opacity:0.4,
            display:{lg:'block',xs:'none'}
        }}
        fontSize='200px'>
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="Hero Banner Image" className='hero-banner-img'/>
    </Box>
)
}

export default HeroBanner
