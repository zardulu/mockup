import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import GroupsIcon from '@mui/icons-material/Groups';
import GestureIcon from '@mui/icons-material/Gesture';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const CategoriesSection = () => {
  const categories = [
    { id: 1, name: 'News', icon: <ShowChartIcon /> },
    { id: 2, name: 'Practice', icon: <GroupsIcon /> },
    { id: 3, name: 'Music Notes', icon: <GestureIcon /> },
    { id: 4, name: 'Latest Release', icon: <EqualizerIcon /> },
    { id: 5, name: 'Instruments', icon: <DesignServicesIcon /> },
    { id: 6, name: 'Musicians', icon: <LightbulbIcon /> },
    { id: 7, name: 'User Journeys', icon: <AutoFixHighIcon /> },
  ];

  return (
    <>
     <Typography variant='h4' marginLeft={5}>Categories</Typography>
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        paddingTop: '30px',
        paddingLeft: '3%',
      }}
    >
      {categories.map((category) => (
        <Card key={category.id} sx={{ width: 'calc(100% / 7)', marginBottom: 3, borderRadius: '30px', boxShadow: '0', cursor: 'pointer' }}>
          <CardContent sx={{ backgroundColor: '#f0ebeb', padding: '`10px', textAlign: 'center' }}>
            {category.icon}
            <Typography variant="body2" sx={{ marginTop: '5px' }}>
              {category.name}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
    </>
  );
};

export default CategoriesSection;
