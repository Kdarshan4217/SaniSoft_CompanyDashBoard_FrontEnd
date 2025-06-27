import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const MobileWrapper = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        px: isMobile ? 1 : 4,
        py: isMobile ? 2 : 4,
        width: "100%",
        boxSizing: "border-box",
        minHeight: "100vh",
      }}
    >
      {children}
    </Box>
  );
};

export default MobileWrapper;
