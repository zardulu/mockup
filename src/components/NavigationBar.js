import React from 'react';
import { Avatar, IconButton, Button, Box, Divider } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import GridViewIcon from '@mui/icons-material/GridView';
import VerifiedIcon from '@mui/icons-material/Verified';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import avatar from '../assets/profilep.jpg'

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        width: {  sm: '10%', md: '8%', lg: '7%', xl: '7%' },
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '30px',
        paddingBottom: '30px',
        position: 'fixed', /* Set the navbar to fixed position */
        top: 0,
      }}
    >
      
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}} >
      <Avatar src= {avatar} alt="Profile Picture" sx={{ width: { xs: 60, sm: 70, md: 80 }, height: { xs: 60, sm: 70, md: 80 } }} />
        <IconButton sx={{ color: 'white' }}>
          <GridViewIcon />
        </IconButton>
        
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', flexGrow: 1, justifyContent: 'center' }}>
        <IconButton sx={{ color: 'white' }}>
          <VerifiedIcon />
        </IconButton>
        <IconButton sx={{ color: 'white' }}>
          <PeopleIcon />
        </IconButton>
        <IconButton sx={{ color: 'white' }}>
          <AssignmentTurnedInIcon />
        </IconButton>
      </Box>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', }}>
      <Divider sx={{ width: '170%', backgroundColor: 'white' }} />
        <IconButton sx={{ color: 'white' }}>
          <SettingsIcon />
        </IconButton>
        <IconButton sx={{ color: 'white' }}>
          <ExitToAppIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
