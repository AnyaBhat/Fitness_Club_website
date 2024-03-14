import React, { useState } from 'react';
import{Route,Routes} from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';


//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//Pages
import ExerciseDetail from './Pages/ExerciseDetail';
import Home from './Pages/Home';

//Style
import './App.css'


const App = () => {
  const [darkmode,setDarkMode]=useState(false);
  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            background:{
              default:'#1c1917',
              paper:'#fff'
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }
        : {
            // palette values for light mode
    
            background: {
              default: '#FFFAFB',
              paper: '#fff',
            },
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }),
    },
  });
  let mode=darkmode?'dark':'light';
  const darkTheme =createTheme(getDesignTokens(mode));

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box width="400px" sx={{width:{x1:'1488px'}}} m="auto">
        <Navbar
        darkmode={darkmode}
        setDarkMode={setDarkMode}/>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
        </Routes>
        <Footer darkmode={darkmode}/>
      </Box>
    </ThemeProvider>
  )
}

export default App
