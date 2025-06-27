import React from 'react';
import { Box } from '@mui/material';
import { pageWrapper } from '../styles/pageStyles';

const AppWrapper = ({ children }) => {
  return <Box sx={pageWrapper}>{children}</Box>;
};

export default AppWrapper;
