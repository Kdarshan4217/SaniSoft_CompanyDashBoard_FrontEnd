// import React, { useState } from 'react';
// import {
//   Container,
//   Typography,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Button,
//   Paper,
//   Collapse,
//   Box,
//   TextField,
// } from '@mui/material';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// // Initial dummy data
// const initialCompanies = [
//   {
//     id: 1,
//     name: 'Darshan Kamat',
//     organization: 'Sanisoft',
//     email: 'darshan@example.com',
//     contact: '9876543210',
//     orders: [
//       {
//         id: 'ORD001',
//         quantity: 100,
//         quality: 'A+',
//         weight: '50kg',
//         amount: '₹10,000',
//         from: 'Pune',
//         to: 'Mumbai',
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Rahul More',
//     organization: 'TechVision',
//     email: 'rahul@example.com',
//     contact: '9123456789',
//     orders: [
//       {
//         id: 'ORD002',
//         quantity: 200,
//         quality: 'B',
//         weight: '120kg',
//         amount: '₹18,000',
//         from: 'Nashik',
//         to: 'Kolhapur',
//       },
//     ],
//   },
// ];

// const Company = () => {
//   const [companies, setCompanies] = useState(initialCompanies);
//   const [openCompanyId, setOpenCompanyId] = useState(null);

//   const toggleOrders = (id) => {
//     setOpenCompanyId(openCompanyId === id ? null : id);
//   };

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       organization: '',
//       email: '',
//       contact: '',
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required('Required'),
//       organization: Yup.string().required('Required'),
//       email: Yup.string().email('Invalid email').required('Required'),
//       contact: Yup.string()
//         .matches(/^\d{10}$/, 'Must be 10 digit number')
//         .required('Required'),
//     }),
//     onSubmit: (values, { resetForm }) => {
//       const newCompany = {
//         ...values,
//         id: Date.now(),
//         orders: [],
//       };
//       setCompanies((prev) => [...prev, newCompany]);
//       resetForm();
//     },
//   });

//   return (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Company Details
//       </Typography>

//       {/* Add Company Form */}
//       <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
//         <Typography variant="h6" gutterBottom>
//           Add New Company
//         </Typography>
//         <form onSubmit={formik.handleSubmit}>
//           <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//             <TextField
//               label="Name"
//               name="name"
//               value={formik.values.name}
//               onChange={formik.handleChange}
//               error={formik.touched.name && Boolean(formik.errors.name)}
//               helperText={formik.touched.name && formik.errors.name}
//             />
//             <TextField
//               label="Organization"
//               name="organization"
//               value={formik.values.organization}
//               onChange={formik.handleChange}
//               error={formik.touched.organization && Boolean(formik.errors.organization)}
//               helperText={formik.touched.organization && formik.errors.organization}
//             />
//             <TextField
//               label="Email"
//               name="email"
//               type="email"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               error={formik.touched.email && Boolean(formik.errors.email)}
//               helperText={formik.touched.email && formik.errors.email}
//             />
//             <TextField
//               label="Contact"
//               name="contact"
//               value={formik.values.contact}
//               onChange={formik.handleChange}
//               error={formik.touched.contact && Boolean(formik.errors.contact)}
//               helperText={formik.touched.contact && formik.errors.contact}
//             />
//             <Button type="submit" variant="contained" sx={{ height: '56px' }}>
//               Add Company
//             </Button>
//           </Box>
//         </form>
//       </Paper>

//       {/* Company Table */}
//       <Paper elevation={3} sx={{ p: 2 }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Organization</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Contact</TableCell>
//               <TableCell>Action</TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {companies.map((company) => (
//               <React.Fragment key={company.id}>
//                 <TableRow>
//                   <TableCell>{company.name}</TableCell>
//                   <TableCell>{company.organization}</TableCell>
//                   <TableCell>{company.email}</TableCell>
//                   <TableCell>{company.contact}</TableCell>
//                   <TableCell>
//                     <Button
//                       variant="contained"
//                       onClick={() => toggleOrders(company.id)}
//                     >
//                       {openCompanyId === company.id ? 'Hide Order' : 'View Order'}
//                     </Button>
//                   </TableCell>
//                 </TableRow>

//                 {/* Order Section */}
//                 <TableRow>
//                   <TableCell colSpan={5} style={{ paddingBottom: 0, paddingTop: 0 }}>
//                     <Collapse in={openCompanyId === company.id} timeout="auto" unmountOnExit>
//                       <Box margin={2}>
//                         <Typography variant="h6" gutterBottom>
//                           Orders for {company.name}
//                         </Typography>
//                         <Table size="small">
//                           <TableHead>
//                             <TableRow>
//                               <TableCell>Order ID</TableCell>
//                               <TableCell>Quantity</TableCell>
//                               <TableCell>Quality</TableCell>
//                               <TableCell>Weight</TableCell>
//                               <TableCell>Amount</TableCell>
//                               <TableCell>From</TableCell>
//                               <TableCell>To</TableCell>
//                             </TableRow>
//                           </TableHead>
//                           <TableBody>
//                             {company.orders.map((order) => (
//                               <TableRow key={order.id}>
//                                 <TableCell>{order.id}</TableCell>
//                                 <TableCell>{order.quantity}</TableCell>
//                                 <TableCell>{order.quality}</TableCell>
//                                 <TableCell>{order.weight}</TableCell>
//                                 <TableCell>{order.amount}</TableCell>
//                                 <TableCell>{order.from}</TableCell>
//                                 <TableCell>{order.to}</TableCell>
//                               </TableRow>
//                             ))}
//                           </TableBody>
//                         </Table>
//                       </Box>
//                     </Collapse>
//                   </TableCell>
//                 </TableRow>
//               </React.Fragment>
//             ))}
//           </TableBody>
//         </Table>
//       </Paper>
//     </Container>
//   );
// };

// export default Company;


import React, { useState } from 'react';
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Collapse,
  Box,
  Button,
} from '@mui/material';
import { useAppContext } from '../context/AppContext';

const Company = () => {
  const { parties, orders } = useAppContext();
  const [openPartyId, setOpenPartyId] = useState(null);

  const toggleOrders = (id) => {
    setOpenPartyId(openPartyId === id ? null : id);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Company Details
      </Typography>

      {/* Company Table (actually Party Table) */}
      <Paper elevation={3} sx={{ p: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {parties.map((party) => (
              <React.Fragment key={party.id}>
                <TableRow>
                  <TableCell>{party.name}</TableCell>
                  <TableCell>{party.contact}</TableCell>
                  <TableCell>{party.city}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() => toggleOrders(party.id)}
                    >
                      {openPartyId === party.id ? 'Hide Orders' : 'View Orders'}
                    </Button>
                  </TableCell>
                </TableRow>

                {/* Orders for this party */}
                <TableRow>
                  <TableCell colSpan={4} style={{ padding: 0 }}>
                    <Collapse in={openPartyId === party.id} timeout="auto" unmountOnExit>
                      <Box margin={2}>
                        <Typography variant="h6" gutterBottom>
                          Orders for {party.name}
                        </Typography>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Material</TableCell>
                              <TableCell>Quantity</TableCell>
                              <TableCell>Weight</TableCell>
                              <TableCell>From</TableCell>
                              <TableCell>To</TableCell>
                              <TableCell>KM</TableCell>
                              <TableCell>Amount</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {orders
                              .filter((o) => o.partyId === party.id)
                              .map((order) => (
                                <TableRow key={order.id}>
                                  <TableCell>{order.material}</TableCell>
                                  <TableCell>{order.quantity}</TableCell>
                                  <TableCell>{order.weight}</TableCell>
                                  <TableCell>{order.from}</TableCell>
                                  <TableCell>{order.to}</TableCell>
                                  <TableCell>{order.km}</TableCell>
                                  <TableCell>{order.amount}</TableCell>
                                </TableRow>
                              ))}
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default Company;


