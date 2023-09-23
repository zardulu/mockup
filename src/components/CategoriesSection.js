import React from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import GroupsIcon from '@mui/icons-material/Groups';
import GestureIcon from '@mui/icons-material/Gesture';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { CardActionArea } from '@mui/material';

const CategoriesSection = () => {
  const categories = [
    { id: 1, name: 'News', icon: <ShowChartIcon /> },
    { id: 2, name: 'Practice', icon: <GroupsIcon /> },
    { id: 3, name: 'Music Notes', icon: <GestureIcon /> },
    { id: 4, name: 'Latest Release', icon: <EqualizerIcon /> },
    { id: 5, name: 'Instruments', icon: <DesignServicesIcon /> },
    { id: 6, name: 'Musicians', icon: <LightbulbIcon /> },
    
  ];

  return (
    <>
     <Typography variant='h4' marginLeft={5}>Categories</Typography>
    <Grid
      container
      spacing={2}
      sx={{
        paddingTop: '30px',
        paddingLeft: '3%',
        paddingRight: '3%',
      }}
    >
      {categories.map((category) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={category.id}>
          <Card sx={{ marginBottom: 3, borderRadius: '30px', boxShadow: '0', cursor: 'pointer' }}>
            <CardActionArea>
            <CardContent sx={{ backgroundColor: '#f0ebeb', padding: '`10px', textAlign: 'center' }}>
              {category.icon}
              <Typography variant="body2" sx={{ marginTop: '5px' }}>
                {category.name}
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
    </>
  );
};

export default CategoriesSection;
