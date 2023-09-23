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
    <Grid
      container
      spacing={2}
      sx={{
        paddingTop: '25px',
        paddingLeft: '3%',
        paddingRight: '3%',
      }}
    >
      {cardData.map((card) => (
        <Grid item xs={12} sm={6} md={6} lg= {6} key={card.id}>
          <Card sx={{ backgroundColor: '#f0ebeb', marginBottom: '20px', borderRadius: '20px', boxShadow: 0, cursor: 'pointer' }}>
            <CardActionArea>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={4}>
                  <img
                    src={card.imageSrc}
                    alt="Card Image"
                    style={{ width: '100%', height: 'auto', borderRadius: '15px'}}
                  />
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6">{card.heading}</Typography>
                  <Typography variant="subtitle1">{card.subheading}</Typography>
                  <LinearProgress variant='determinate' color='warning' value={card.progress} sx={{ marginTop: '20px' }} />
                  <Typography variant="body1">{`${card.progress}% completed`}</Typography>
                </Grid>
              </Grid>
            </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
    </>
  );
};

export default MyLearningSection;
