
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  InputAdornment,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// ✅ Imported your custom image
import backgroundImage from "../assets/images/blue-wavy-background.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      if (values.email === "admin@gmail.com" && values.password === "admin123") {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    },
  });

  const handleForgotPassword = () => {
    if (resetEmail) {
      alert(`Reset link sent to ${resetEmail}`);
      setOpenForgot(false);
      setResetEmail("");
    } else {
      alert("Please enter a valid email");
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 0,
        },
      }}
    >
      <Tilt glareEnable={true} glareColor="#aaa" glareMaxOpacity={0.3}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={10}
            sx={{
              position: "relative",
              zIndex: 1,
              p: 4,
              width: "100%",
              maxWidth: 400,
              backdropFilter: "blur(12px)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: 3,
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#fff" }}
            >
              Welcome Back
            </Typography>

            <Typography
              variant="body2"
              align="center"
              gutterBottom
              sx={{ color: "#ccc" }}
            >
              Login to continue
            </Typography>

            <form onSubmit={formik.handleSubmit} autoComplete="off">
              {/* Email */}
              <Box mb={3}>
                <TextField
                  autoComplete="off"
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  InputLabelProps={{
                    shrink: true,
                    sx: {
                      color: "#80d8ff",
                      fontSize: "1rem",
                      fontWeight: 500,
                    },
                  }}
                  InputProps={{
                    sx: {
                      color: "#fff",
                      height: 48,
                      borderRadius: 1,
                      backgroundColor: "transparent",
                      "& fieldset": {
                        borderColor: "#80d8ff",
                      },
                      "&:hover fieldset": {
                        borderColor: "#40c4ff",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#00b0ff",
                      },
                    },
                  }}
                />
              </Box>

              {/* Password */}
              <Box mb={2}>
                <TextField
                  autoComplete="off"
                  fullWidth
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  InputLabelProps={{
                    shrink: true,
                    sx: {
                      color: "#80d8ff",
                      fontSize: "1rem",
                      fontWeight: 500,
                    },
                  }}
                  InputProps={{
                    sx: {
                      color: "#fff",
                      height: 48,
                      borderRadius: 1,
                      backgroundColor: "transparent",
                      "& fieldset": {
                        borderColor: "#80d8ff",
                      },
                      "&:hover fieldset": {
                        borderColor: "#40c4ff",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#00b0ff",
                      },
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onMouseEnter={() => setShowPassword(true)}
                          onMouseLeave={() => setShowPassword(false)}
                          edge="end"
                          sx={{ color: "#fff" }}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* Forgot Password */}
              <Box mb={2} textAlign="right">
                <Typography
                  variant="body2"
                  sx={{
                    color: "#eee",
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                  onClick={() => setOpenForgot(true)}
                >
                  Forgot Password?
                </Typography>
              </Box>

              <Button type="submit" fullWidth variant="contained" size="large">
                LOGIN
              </Button>
            </form>
          </Paper>
        </motion.div>
      </Tilt>

      {/* Forgot Password Dialog */}
      <Dialog open={openForgot} onClose={() => setOpenForgot(false)}>
        <DialogTitle>Reset Password</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Enter your email"
            type="email"
            fullWidth
            variant="outlined"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenForgot(false)}>Cancel</Button>
          <Button onClick={handleForgotPassword} variant="contained">
            Send Reset Link
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Login;





