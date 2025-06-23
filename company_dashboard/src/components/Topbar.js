import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Topbar = () => {
  return (
    <AppBar position="static" sx={{ ml: 28, background: '#1C2541' }}>
      <Toolbar>
        <Typography variant="h6" component="div">
          Company Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
