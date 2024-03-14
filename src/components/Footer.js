import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';
import { Palette } from '@mui/icons-material';

const Footer = ({darkmode}) => {
  const logoStyle={
    width:'200px',
    height:'41px',
    filter:darkmode ? 'invert(1)':'none',
  }
  return (
  <Box mt="80px" background="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={logoStyle}/>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by Mastery</Typography>
  </Box>
)};

export default Footer;