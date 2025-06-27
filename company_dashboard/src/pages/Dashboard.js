
import React from 'react';
import { Box, Paper, Grid, Avatar, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  contentContainer,
  paperBox
} from '../styles/pageStyles';
import {
  dashboardCard,
  cardTitle,
  cardDetail,
  cardMetric
} from '../styles/dashboardStyles';
import { useAppContext } from '../context/AppContext';
import companyLogo from '../assets/images/Anvit Roadlines logo.png';
import {
  companyCardBox,
  logoAvatar,
  textSection,
  companyName,
  detailText
} from '../styles/companyInfoStyles';

import MobileWrapper from '../components/MobileWrapper'; // ✅ New wrapper

const companyData = {
  name: 'Anvit Roadlines',
  location: 'Ichalkaranji, Maharashtra',
  contact: '📞 9175836262 / 7276174196',
  email: '✉️ Parcel Services - Maharashtra & Karnataka',
  logo: companyLogo,
};

const Dashboard = () => {
  const { parties, orders } = useAppContext();

  const totalParties = parties.length;
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, o) => sum + Number(o.amount || 0), 0);

  return (
    <MobileWrapper>
      <Box sx={contentContainer}>
        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Welcome to the Dashboard!
          </Typography>
          <Typography variant="body1" sx={{ color: 'gray', mb: 3 }}>
            Manage your companies, orders, and performance overview.
          </Typography>
        </motion.div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Paper
            elevation={4}
            sx={{
              ...companyCardBox,
              mb: 4,
              flexDirection: { xs: 'column', sm: 'row' }, // 📱 column on mobile
              alignItems: { xs: 'center', sm: 'flex-start' },
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            <Avatar
              src={companyData.logo}
              alt="Company Logo"
              sx={{
                ...logoAvatar,
                mb: { xs: 2, sm: 0 }, // spacing on mobile
              }}
              variant="rounded"
            />
            <Box sx={textSection}>
              <Typography sx={companyName}>{companyData.name}</Typography>
              <Typography sx={detailText}>📍 {companyData.location}</Typography>
              <Typography sx={detailText}>{companyData.contact}</Typography>
              <Typography sx={detailText}>{companyData.email}</Typography>
            </Box>
          </Paper>
        </motion.div>

        {/* KPI Cards */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={dashboardCard}>
              <Typography variant="subtitle2" sx={cardTitle}>Total Parties</Typography>
              <Typography variant="h5" sx={cardMetric}>{totalParties}</Typography>
              <Typography sx={cardDetail}>Based on current entries</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={dashboardCard}>
              <Typography variant="subtitle2" sx={cardTitle}>Total Orders</Typography>
              <Typography variant="h5" sx={cardMetric}>{totalOrders}</Typography>
              <Typography sx={cardDetail}>Across all companies</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={dashboardCard}>
              <Typography variant="subtitle2" sx={cardTitle}>Total Revenue</Typography>
              <Typography variant="h5" sx={cardMetric}>₹ {totalRevenue.toLocaleString()}</Typography>
              <Typography sx={cardDetail}>Including all deliveries</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </MobileWrapper>
  );
};

export default Dashboard;





