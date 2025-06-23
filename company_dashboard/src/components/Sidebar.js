import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, Business, People, Info, ShoppingCart } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const menu = [
    { name: 'Dashboard', icon: <Dashboard />, path: '/dashboard' },
    { name: 'Company', icon: <Business />, path: '/company' },
    { name: 'Orders', icon: <ShoppingCart />, path: '/orders' },
    { name: 'Party Master', icon: <People />, path: '/party' },
    { name: 'Profile', icon: <Info />, path: '/profile' },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 220,
        '& .MuiDrawer-paper': {
          width: 220,
          background: '#0B132B',
          color: '#fff',
        },
      }}
    >
      <List>
        {menu.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? '#00d1b2' : 'white',
            })}
          >
            <ListItem button>
              <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;


