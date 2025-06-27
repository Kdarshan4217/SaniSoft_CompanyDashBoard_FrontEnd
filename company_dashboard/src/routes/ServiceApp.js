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

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Login from "../pages/Login";
// import Dashboard from "../pages/Dashboard";
// import Company from "../pages/Company";
// import Orders from "../pages/Orders";
// import Profile from "../pages/Profile";
// import PartyMaster from "../pages/PartyMaster";
// import SidebarLayout from "../components/SidebarLayout";
// import ProtectedRoute from "../components/ProtectedRoute"; // ✅ added
// import { Typography } from "@mui/material";

// const ServiceApp = () => {
//   return (
//     <Routes>
//       {/* Login route without protection */}
//       <Route path="/" element={<Login />} />

//       {/* Protected Routes */}
//       <Route
//         element={
//           <ProtectedRoute>
//             <SidebarLayout />
//           </ProtectedRoute>
//         }
//       >
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


// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Login from "../pages/Login";
// import Dashboard from "../pages/Dashboard";
// import Company from "../pages/Company";
// import Orders from "../pages/Orders";
// import Profile from "../pages/Profile";
// import PartyMaster from "../pages/PartyMaster";
// import SidebarLayout from "../components/SidebarLayout";
// import ProtectedRoute from "../components/ProtectedRoute";

// const ServiceApp = () => {
//   return (
//     <Routes>
//       {/* Public route */}
//       <Route path="/" element={<Login />} />

//       {/* Protected routes */}
//       <Route
//         element={
//           <ProtectedRoute>
//             <SidebarLayout />
//           </ProtectedRoute>
//         }
//       >
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/company" element={<Company />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/party" element={<PartyMaster />} />
//        // <Route path="/profile" element={<Profile />} />
//       </Route>
//       <Route path="*" element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// };

// export default ServiceApp;


import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Company from "../pages/Company";
import Orders from "../pages/Orders";
import Profile from "../pages/Profile";
import PartyMaster from "../pages/PartyMaster";
import SidebarLayout from "../components/SidebarLayout";
import ProtectedRoute from "../components/ProtectedRoute";
import AppWrapper from "../components/AppWrapper"; // ✅ new wrapper import

const ServiceApp = () => {
  return (
    <Routes>
      {/* Public route */}
      <Route path="/" element={<Login />} />

      {/* Protected routes */}
      <Route
        element={
          <ProtectedRoute>
            <AppWrapper> {/* ✅ Wrapper here */}
              <SidebarLayout />
            </AppWrapper>
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/company" element={<Company />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/party" element={<PartyMaster />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default ServiceApp;

