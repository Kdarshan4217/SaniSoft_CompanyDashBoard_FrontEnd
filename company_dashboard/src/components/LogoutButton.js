import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({ open }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth data (adjust if you use tokens or sessions)
    localStorage.clear(); // or remove specific keys
    navigate('/'); // redirect to login
  };

  return (
    <ListItem
      button
      onClick={handleLogout}
      sx={{
        px: 2,
        py: 1.5,
        '&:hover': { backgroundColor: '#112240' },
        color: '#fff',
      }}
    >
      <ListItemIcon
        sx={{
          color: 'inherit',
          minWidth: 0,
          mr: open ? 2 : 'auto',
          justifyContent: 'center',
        }}
      >
        <LogoutIcon />
      </ListItemIcon>
      {open && (
        <ListItemText
          primary="Logout"
          primaryTypographyProps={{ fontSize: 15 }}
        />
      )}
    </ListItem>
  );
};

export default LogoutButton;
