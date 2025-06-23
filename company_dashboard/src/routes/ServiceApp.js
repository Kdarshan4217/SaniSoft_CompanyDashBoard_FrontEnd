// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Login from '../pages/Login';
// import Dashboard from '../pages/Dashboard';
// import Company from '../pages/Company';
// import Orders from '../pages/Orders';
// import Profile from '../pages/Profile';
// import PartyMaster from '../pages/PartyMaster';
// import SidebarLayout from '../components/SidebarLayout'; 

// const ServiceApp = () => {
//   return (
//     <Routes>
      
//       <Route path="/" element={<Login />} />

   
//       <Route element={<SidebarLayout />}>
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/company" element={<Company />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/party" element={<PartyMaster />} />
//         <Route path="/profile" element={<Profile />} />
//       </Route>
//     </Routes>
//   );
// };

// export default ServiceApp;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Company from '../pages/Company';
import Orders from '../pages/Orders';
import Profile from '../pages/Profile';
import PartyMaster from '../pages/PartyMaster';
import SidebarLayout from '../components/SidebarLayout';

const ServiceApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<SidebarLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/company" element={<Company />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/party" element={<PartyMaster />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default ServiceApp;
