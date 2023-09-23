import React from 'react';
import { CssBaseline, Box, Grid, Typography, Button } from '@mui/material';
import Navbar from './components/NavigationBar'; 
import MusicTheorySection from './components/MusicTheorySection'; 
import CategoriesSection from './components/CategoriesSection';
import MyLearningSection from './components/MyLearningSection';

const App = () => {
  return (
    <>
      <CssBaseline /> 
      <Grid sx={{ display: 'flex'}}>
        
        <Navbar />
        
        <Grid sx = {{marginLeft: '10vw'}}>
          <MusicTheorySection />
          <CategoriesSection />
          <MyLearningSection />
        </Grid>
      
      </Grid>
    </>
  );
};

export default App;
