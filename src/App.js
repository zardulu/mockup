import React from 'react';
import { CssBaseline, Box, Typography, Button } from '@mui/material';
import Navbar from './components/NavigationBar'; 
import MusicTheorySection from './components/MusicTheorySection'; 
import CategoriesSection from './components/CategoriesSection';
import MyLearningSection from './components/MyLearningSection';

const App = () => {
  return (
    <>
      <CssBaseline /> 
      <Box sx={{ display: 'flex'}}>
        <Navbar />
        <Box>
          <MusicTheorySection />
          <CategoriesSection />
          <MyLearningSection />
        </Box>
      
      </Box>
    </>
  );
};

export default App;
