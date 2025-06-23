import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { Box, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Topbar />
        <Box sx={{ p: 3 }}>
          <Typography variant="h4">Welcome to the Dashboard!</Typography>
          <Typography sx={{ mt: 2 }}>Here you can manage companies, orders, and parties.</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
