

import React from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar } from '@mui/material';

const Topbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: '#ffffff',
        color: '#1c2541',
        borderBottom: '1px solid #e0e0e0',
        px: 2,
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Title */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
          Company Dashboard
        </Typography>

        {/* User Info Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            Darshan
          </Typography>
          <Avatar
            alt="Darshan"
            src="/static/images/avatar/1.jpg" // Replace with your image path
            sx={{ width: 36, height: 36 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
