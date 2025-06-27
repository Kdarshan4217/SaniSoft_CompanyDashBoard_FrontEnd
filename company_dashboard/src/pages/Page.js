
import React from "react";
import { Box } from "@mui/material";
import { pageWrapper, contentContainer } from "../styles/pageStyles";

const Page = ({ children }) => {
  return (
    <Box sx={pageWrapper}>
      <Box sx={contentContainer}>
        {children}
      </Box>
    </Box>
  );
};

export default Page;