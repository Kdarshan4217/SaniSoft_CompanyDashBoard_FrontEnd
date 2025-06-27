import React from 'react';
import {
  Drawer, List, ListItem, ListItemIcon,
  ListItemText, Box, Typography, Divider, Avatar
} from '@mui/material';
import {
  Dashboard, Business, People, ShoppingCart
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import { motion } from 'framer-motion';

const menu = [
  { name: 'Dashboard', icon: <Dashboard />, path: '/dashboard' },
  { name: 'Party Master', icon: <People />, path: '/party' },
  { name: 'Orders', icon: <ShoppingCart />, path: '/orders' },
  { name: 'Company', icon: <Business />, path: '/company' },
];

const Sidebar = ({ open, setOpen, isMobile }) => {
  const drawerContent = (
    <Box
      sx={{
        width: open ? 240 : 70,
        bgcolor: '#0a192f',
        height: '100%',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        pt: 3,
      }}
    >
      <Box>
        {/* Avatar */}
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Avatar
            alt="Anvit Roadlines"
            src="/static/images/avatar/1.jpg"
            sx={{
              width: open ? 64 : 40,
              height: open ? 64 : 40,
              margin: '0 auto',
              mb: open ? 1 : 0,
              fontSize: open ? '1.25rem' : '0.875rem',
            }}
          />
          {open && (
            <Typography variant="subtitle1" fontWeight="bold">
              Anvit Roadlines
            </Typography>
          )}
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Menu Items */}
        {open && (
          <List>
            {menu.map(({ name, icon, path }, index) => (
              <NavLink
                key={index}
                to={path}
                onClick={() => isMobile && setOpen(false)}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? '#00d1b2' : '#fff',
                })}
              >
                <ListItem button sx={{ px: 3 }}>
                  <ListItemIcon sx={{ color: 'inherit' }}>{icon}</ListItemIcon>
                  <ListItemText primary={name} />
                </ListItem>
              </NavLink>
            ))}
          </List>
        )}
      </Box>

      {/* Logout Button */}
      <Box sx={{ mb: 2 }}>
        <LogoutButton open={open} />
      </Box>
    </Box>
  );

  // 🔹 Mobile drawer
  if (isMobile) {
    return (
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        variant="temporary"
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            bgcolor: '#0a192f',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    );
  }

  // 🔸 Desktop drawer with hover animation
  return (
    <motion.div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      animate={{ width: open ? 240 : 70 }}
      transition={{ duration: 0.3 }}
    >
      <Drawer
        variant="permanent"
        sx={{
          width: open ? 240 : 70,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: open ? 240 : 70,
            backgroundColor: '#0a192f',
            color: '#fff',
            overflowX: 'hidden',
            transition: 'width 0.3s',
            borderRight: 'none',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </motion.div>
  );
};

export default Sidebar;










