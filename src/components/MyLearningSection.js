import React from 'react';
import { Card, CardContent, Typography, LinearProgress, Grid, Box, CardActionArea } from '@mui/material';

const MyLearningSection = () => {
  const cardData = [
    {
      id: 1,
      imageSrc: require('../assets/guitar.jpg'),
      heading: 'Learn Guitar',
      subheading: 'John Smith',
      progress: 69,
    },
    {
      id: 2,
      imageSrc: require('../assets/piano.jpg'),
      heading: 'Music Theory 2.0',
      subheading: 'Emily Johnson',
      progress: 27,
    },
  ];

  return (
    <>
    <Typography variant='h4' marginLeft={5}>My Learning</Typography>
    <Box
      sx={{
        display: 'flex',
        paddingTop: '25px',
        gap: '50px',
        paddingLeft: '3%'
        
         // Adjust for the navigation bar width
      }}
    >
      {cardData.map((card) => (
        <Card key={card.id} sx={{backgroundColor: '#f0ebeb', width: '50%', marginBottom: '20px', borderRadius: '20px', boxShadow: 0, cursor: 'pointer' }}>
          <CardActionArea>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid item sx={{marginTop: '-5px', marginBottom: '-20px'}}>
                <img
                  src={card.imageSrc}
                  alt="Card Image"
                  style={{ width: '180px', height: '150px', borderRadius: '15px'}}
                  
                />
              </Grid>
              <Grid item>
                <Typography variant="h6">{card.heading}</Typography>
                <Typography variant="subtitle1">{card.subheading}</Typography>
                <LinearProgress variant='determinate' color='warning' value={card.progress} sx={{ marginTop: '20px', width: '300px' }} />
                <Typography variant="body1">{`${card.progress}% completed`}</Typography>
              </Grid>
            </Grid>
          </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
    </>
  );
};

export default MyLearningSection;
