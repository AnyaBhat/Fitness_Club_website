import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Switch } from '@mui/material'

import Logo from '../assets/images/Logo.png'
const Navbar = ({darkmode,setDarkMode}) => {
  const logoStyle={
    width:'48px',
    height:'48px',
    margin:'0 20px',
    filter:darkmode ? 'invert(1)':'none',
  }
  return (
    <Stack direction='row' 
    justifyContent="space-around" sx={{gap:{sm:'122px',xs:'40px'},mt:{sm:'32px',xs:'20px'},justifyContent:'none'}} px='20px'>
      <Link to="/">
        <img src={Logo} alt="logo" style={logoStyle} />
      </Link>
      <Stack
      direction="row"
      gap="40px"
      fontSize="24px"
      alignItems="flex-end">
        <Link to="/" style={{textDecoration:'none', borderBottom:'3px solid #FF2625',borderColor: darkmode ? '#FFFFFF' : '#FF2625', color: darkmode ? '#FFFFFF' : '#3A1212' }}>Home</Link>
        <a href="#exercises" style={{textDecoration:'none', color: darkmode ? '#FFFFFF' : '#3A1212' }}>Exercise</a>
      </Stack>
        <Switch 
        checked={darkmode}
        onChange={()=>setDarkMode(!darkmode)}
        color="primary"/>
    </Stack>
  )
}

export default Navbar
