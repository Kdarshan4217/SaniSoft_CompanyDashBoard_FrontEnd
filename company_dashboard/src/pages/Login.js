import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper
} from '@mui/material';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
    }),
    onSubmit: (values) => {
      if (values.email === 'admin@test.com' && values.password === 'admin123') {
        navigate('/dashboard');
      } else {
        alert('Invalid credentials');
      }
    },
  });

  return (
    <Container maxWidth="sm">
      <Tilt glareEnable={true} glareColor="#aaa" glareMaxOpacity={0.45}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Paper elevation={6} sx={{ padding: 4, marginTop: 10, borderRadius: 3 }}>
            <Typography variant="h5" align="center" gutterBottom>
              Login to Dashboard
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Box>

              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Box>

              <Button type="submit" fullWidth variant="contained">
                Login
              </Button>
            </form>
          </Paper>
        </motion.div>
      </Tilt>
    </Container>
  );
};

export default Login;
