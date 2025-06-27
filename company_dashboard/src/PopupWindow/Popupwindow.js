import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function PopupBox({
  handleDialogBox,
  setOpenDialog,
  openDialog,
  children,
  title = "Popup",
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={openDialog}
      onClose={handleDialogBox}
      fullScreen={fullScreen}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {title}
          <IconButton
            onClick={handleDialogBox}
            size="small"
            sx={{ color: "grey.600" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default PopupBox;
