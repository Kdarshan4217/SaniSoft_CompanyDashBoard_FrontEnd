// import React from 'react';
// import { Outlet, Link } from 'react-router-dom';
// import { Box, Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';

// const SidebarLayout = () => {
//   return (
//     <Box sx={{ display: 'flex' }}>
//       {/* Sidebar */}
//       <Drawer variant="permanent" anchor="left">
//         <Toolbar />
//         <List>
//           <ListItem button component={Link} to="/dashboard">
//             <ListItemText primary="Dashboard" />
//           </ListItem>
//           <ListItem button component={Link} to="/company">
//             <ListItemText primary="Company" />
//           </ListItem>
//           <ListItem button component={Link} to="/orders">
//             <ListItemText primary="Orders" />
//           </ListItem>
//           <ListItem button component={Link} to="/party">
//             <ListItemText primary="Party Master" />
//           </ListItem>
//           <ListItem button component={Link} to="/profile">
//             <ListItemText primary="Profile" />
//           </ListItem>
//         </List>
//       </Drawer>

//       {/* Main Content */}
//       <Box component="main" sx={{ flexGrow: 1, p: 3, ml: '240px' }}>
//         <Toolbar />
//         <Outlet />
//       </Box>
//     </Box>
//   );
// };

// export default SidebarLayout;


import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Box } from '@mui/material';

const SidebarLayout = () => {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar currentPath={location.pathname} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default SidebarLayout;

