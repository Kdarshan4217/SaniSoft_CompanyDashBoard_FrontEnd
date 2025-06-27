import React from 'react';
import {
  Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Typography
} from '@mui/material';

const companies = [
  { id: 1, name: 'Infosys Ltd', location: 'Bangalore', contact: '080 2852 0261' },
  { id: 2, name: 'TCS', location: 'Mumbai', contact: '022 6778 9999' },
  { id: 3, name: 'Wipro', location: 'Bangalore', contact: '080 2844 0011' },
];

const CompanyTable = () => {
  return (
    <Paper sx={{ mt: 3, p: 2, borderRadius: 3, boxShadow: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Company Information
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell><b>ID</b></TableCell>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Location</b></TableCell>
              <TableCell><b>Contact</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies.map((company) => (
              <TableRow key={company.id}>
                <TableCell>{company.id}</TableCell>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.location}</TableCell>
                <TableCell>{company.contact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CompanyTable;
