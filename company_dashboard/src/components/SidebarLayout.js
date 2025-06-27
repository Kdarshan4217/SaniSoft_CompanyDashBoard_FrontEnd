
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';

const SidebarLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} isMobile={isMobile} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: '100vh',
          width: '100%',
          //pl: isMobile ? 0 : sidebarOpen ? '240px' : '70px',
          pr: 0,
          pt: 2,
          transition: 'all 0.3s ease',
        }}
      >
        {isMobile && (
          <IconButton
            onClick={() => setSidebarOpen(true)}
            sx={{ position: 'fixed', top: 10, left: 10, zIndex: 2000 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Outlet />
      </Box>
    </Box>
  );
};

export default SidebarLayout;





