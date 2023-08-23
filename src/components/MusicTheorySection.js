import React from 'react';
import { Card, CardContent, CardMedia, Avatar, Typography, Box, Grid, CardActionArea } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
import StarIcon from '@mui/icons-material/Star';

const MusicTheorySection = () => {
  const profileCardsData = [
    {
      id: 1,
      name: 'David',
      class: 'Music Theory 101',
      imageUrl: require('../assets/davidp.jpg'),
      bannerUrl: require('../assets/david.jpg') ,
      duration: '2h 30m',
      rating: '4.8/5',
      price: '$29',
    },
    {
        id: 1,
        name: 'Emily Lee',
        class: 'Guitar Techniques',
        imageUrl: require('../assets/emilyp.jpg'),
        bannerUrl: require('../assets/emily.jpg') ,
        duration: '1h 45m',
        rating: '4.5/5',
        price: '$19',
      },
      {
        id: 1,
        name: 'Michael',
        class: 'Piano Basics',
        imageUrl: require('../assets/michaelp.jpg'),
        bannerUrl: require('../assets/michael.jpg') ,
        duration: 'Learn',
        rating: '4.6/5',
        price: 'Start',
      },
      {
        id: 1,
        name: 'Sophia',
        class: 'Music theory',
        imageUrl: require('../assets/sophiap.jpg'),
        bannerUrl: require('../assets/sophia.jpg') ,
        duration: '1h 17m',
        rating: '4.1/5',
        price: 'Start',
      },
    
  ];

  return (
    <>
    <Typography variant='h4' marginTop={5} marginLeft={5}>Music Theory</Typography>
    <Box
      sx={{
        display: 'flex',
        paddingTop: '25px',
        gap: '50px',
        paddingLeft: '3%'
        
         
      }}
    >
      {profileCardsData.map((profile) => (
        <Card key={profile.id} sx={{ backgroundColor: '#f0ebeb', width: '330px', marginBottom: 3, borderRadius: '20px', boxShadow: 0, cursor:'pointer'}}>
          <CardActionArea>
          <CardMedia
            component="img"
            height="130"
            image={profile.bannerUrl}
            alt="Banner"
            sx={{ padding: '4px', borderRadius: '30px' }}
          />
          <CardContent sx={{ backgroundColor: '#f0ebeb', padding: '5px', position: 'relative' }}>
            <Box
              sx={{
                position: 'absolute',
                top: '-20px', // Adjust to position vertically
                left: '10px', // Adjust to shift horizontally
                backgroundColor: 'white',
                padding: '5px 10px', // Adjust pill's padding
                borderRadius: '20px', // Adjust pill's border radius
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Avatar src={profile.imageUrl} alt="Profile" sx={{ width: 40, height: 40, marginRight: 1}} />
              <Typography sx={{marginRight: 7}} variant="body2">{profile.name}</Typography>
            </Box>
            <Typography variant="body2" sx={{ marginLeft: '10px' ,marginTop: '35px' }}>{profile.class}</Typography>
          </CardContent>
          <CardContent sx={{ backgroundColor: '#f6e3e3', padding: '15px' }}>
  <Grid container alignItems="center" spacing={2}>
    <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
      <TimerIcon color="black" />
      <Typography variant="body2" sx={{ marginLeft: '5px',marginRight: '17px' }}>
        {profile.duration}
      </Typography>
    </Grid>
    <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
      <StarIcon color="black" />
      <Typography variant="body2" sx={{ marginLeft: '5px', marginRight: '17px' }}>
        {profile.rating}
      </Typography>
    </Grid>
    <Grid item>
      <Box
        sx={{
          backgroundColor: 'white',
          padding: '10px 20px',
          borderRadius: '20px',
          display: 'inline-block',
          
        }}
      >
        <Typography variant="body2">{profile.price}</Typography>
      </Box>
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

export default MusicTheorySection;