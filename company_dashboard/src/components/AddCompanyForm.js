import React from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddCompanyForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      organization: '',
      email: '',
      contact: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      organization: Yup.string().required('Organization is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      contact: Yup.string().matches(/^\d{10}$/, 'Enter 10-digit number').required('Contact is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  });

  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Add New Company
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <TextField
            label="Organization"
            name="organization"
            value={formik.values.organization}
            onChange={formik.handleChange}
            error={formik.touched.organization && Boolean(formik.errors.organization)}
            helperText={formik.touched.organization && formik.errors.organization}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            label="Contact"
            name="contact"
            value={formik.values.contact}
            onChange={formik.handleChange}
            error={formik.touched.contact && Boolean(formik.errors.contact)}
            helperText={formik.touched.contact && formik.errors.contact}
          />

          <Button type="submit" variant="contained" color="primary">
            Add Company
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default AddCompanyForm;
