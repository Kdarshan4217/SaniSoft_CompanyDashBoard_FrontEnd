// import React, { useState } from 'react';
// import {
//   Container, Typography, Table, TableHead, TableRow,
//   TableCell, TableBody, Button, Paper, Dialog, DialogTitle,
//   DialogContent, DialogActions, TextField, MenuItem, IconButton
// } from '@mui/material';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { Edit, Delete } from '@mui/icons-material';
// import { useAppContext } from '../context/AppContext';
// import PopupBox from '../PopupWindow/Popupwindow';

// const orderSchema = Yup.object({
//   partyId: Yup.string().required('Party is required'),
//   material: Yup.string().required('Material is required'),
//   quantity: Yup.number().required('Quantity required'),
//   weight: Yup.number().required('Weight required'),
//   from: Yup.string().required('From location required'),
//   to: Yup.string().required('To location required'),
//   km: Yup.number().required('KM required'),
//   amount: Yup.number().required('Amount required')
// });

// const Orders = () => {
//   const { parties, orders, addOrder, updateOrder, deleteOrder } = useAppContext();
//   const [open, setOpen] = useState(false);
//   const [editOrder, setEditOrder] = useState(null);
  
//    const [openDialog, setOpenDialog] = useState(false);
//     const handleDialogBox = () => {
//       setOpenDialog(!openDialog);
//     };

//   const handleSubmit = (values, { resetForm }) => {
//     if (editOrder) {
//       updateOrder(editOrder.id, values);
//       setEditOrder(null);
//     } else {
//       addOrder(values);
//     }
//     resetForm();
//     setOpen(false);
//   };

//   return (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Orders
//       </Typography>

//       <Button variant="contained" onClick={() => { setOpen(true); setEditOrder(null); }}>
//         Add Order
//       </Button>

//       <Paper sx={{ mt: 3 }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Party</TableCell>
//               <TableCell>Material</TableCell>
//               <TableCell>Quantity</TableCell>
//               <TableCell>Weight</TableCell>
//               <TableCell>From</TableCell>
//               <TableCell>To</TableCell>
//               <TableCell>KM</TableCell>
//               <TableCell>Amount</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {orders.map(order => (
//               <TableRow key={order.id}>
//                 <TableCell>{parties.find(p => p.id === order.partyId)?.name || 'Unknown'}</TableCell>
//                 <TableCell>{order.material}</TableCell>
//                 <TableCell>{order.quantity}</TableCell>
//                 <TableCell>{order.weight}</TableCell>
//                 <TableCell>{order.from}</TableCell>
//                 <TableCell>{order.to}</TableCell>
//                 <TableCell>{order.km}</TableCell>
//                 <TableCell>{order.amount}</TableCell>
//                 <TableCell>
//                   <IconButton onClick={() => { setEditOrder(order); setOpen(true); }}><Edit /></IconButton>
//                   <IconButton onClick={() => deleteOrder(order.id)}><Delete /></IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Paper>

//       {/* <Dialog open={open} onClose={() => setOpen(false)}>
//         <DialogTitle>{editOrder ? 'Edit' : 'Add'} Order</DialogTitle>
//         <DialogContent>
//           <Formik
//             initialValues={{
//               partyId: editOrder?.partyId || '',
//               material: editOrder?.material || '',
//               quantity: editOrder?.quantity || '',
//               weight: editOrder?.weight || '',
//               from: editOrder?.from || '',
//               to: editOrder?.to || '',
//               km: editOrder?.km || '',
//               amount: editOrder?.amount || ''
//             }}
//             validationSchema={orderSchema}
//             onSubmit={handleSubmit}
//             enableReinitialize
//           >
//             {({ errors, touched }) => (
//               <Form>
//                 <Field
//                   name="partyId"
//                   as={TextField}
//                   select
//                   fullWidth
//                   margin="normal"
//                   label="Select Party"
//                   error={!!errors.partyId && touched.partyId}
//                   helperText={touched.partyId && errors.partyId}
//                 >
//                   {parties.map(party => (
//                     <MenuItem key={party.id} value={party.id}>
//                       {party.name}
//                     </MenuItem>
//                   ))}
//                 </Field>
//                 <Field name="material" as={TextField} fullWidth label="Material" margin="normal"
//                   error={!!errors.material && touched.material} helperText={touched.material && errors.material} />
//                 <Field name="quantity" type="number" as={TextField} fullWidth label="Quantity" margin="normal"
//                   error={!!errors.quantity && touched.quantity} helperText={touched.quantity && errors.quantity} />
//                 <Field name="weight" type="number" as={TextField} fullWidth label="Weight" margin="normal"
//                   error={!!errors.weight && touched.weight} helperText={touched.weight && errors.weight} />
//                 <Field name="from" as={TextField} fullWidth label="From" margin="normal"
//                   error={!!errors.from && touched.from} helperText={touched.from && errors.from} />
//                 <Field name="to" as={TextField} fullWidth label="To" margin="normal"
//                   error={!!errors.to && touched.to} helperText={touched.to && errors.to} />
//                 <Field name="km" type="number" as={TextField} fullWidth label="KM" margin="normal"
//                   error={!!errors.km && touched.km} helperText={touched.km && errors.km} />
//                 <Field name="amount" type="number" as={TextField} fullWidth label="Amount" margin="normal"
//                   error={!!errors.amount && touched.amount} helperText={touched.amount && errors.amount} />

//                 <DialogActions>
//                   <Button onClick={() => setOpen(false)}>Cancel</Button>
//                   <Button type="submit" variant="contained">{editOrder ? 'Update' : 'Add'}</Button>
//                 </DialogActions>
//               </Form>
//             )}
//           </Formik>
//         </DialogContent>
//       </Dialog> */}

//       <PopupBox handleDialogBox={handleDialogBox}
//         openDialog={openDialog}
//         setOpenDialog={setOpenDialog}
//         title={"orderDetails"}> {}</PopupBox>
//     </Container>
//   );
// };

// export default Orders;




import React, { useState } from 'react';
import {
  Container, Typography, Table, TableHead, TableRow,
  TableCell, TableBody, Button, Paper, TextField,
  MenuItem, IconButton, DialogActions
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Edit, Delete } from '@mui/icons-material';
import { useAppContext } from '../context/AppContext';
import PopupBox from '../PopupWindow/Popupwindow';

const orderSchema = Yup.object({
  partyId: Yup.string().required('Party is required'),
  material: Yup.string().required('Material is required'),
  quantity: Yup.number().required('Quantity required'),
  weight: Yup.number().required('Weight required'),
  from: Yup.string().required('From location required'),
  to: Yup.string().required('To location required'),
  km: Yup.number().required('KM required'),
  amount: Yup.number().required('Amount required')
});

const Orders = () => {
  const { parties, orders, addOrder, updateOrder, deleteOrder } = useAppContext();

  const [editOrder, setEditOrder] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogBox = () => {
    setOpenDialog(!openDialog);
  };

  const handleSubmit = (values, { resetForm }) => {
    if (editOrder) {
      updateOrder(editOrder.id, values);
      setEditOrder(null);
    } else {
      addOrder(values);
    }
    resetForm();
    setOpenDialog(false);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Orders
      </Typography>

      <Button
        variant="contained"
        onClick={() => {
          setEditOrder(null);
          setOpenDialog(true);
        }}
      >
        Add Order
      </Button>

      <Paper sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Party</TableCell>
              <TableCell>Material</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
              <TableCell>KM</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map(order => (
              <TableRow key={order.id}>
                <TableCell>{parties.find(p => p.id === order.partyId)?.name || 'Unknown'}</TableCell>
                <TableCell>{order.material}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>{order.weight}</TableCell>
                <TableCell>{order.from}</TableCell>
                <TableCell>{order.to}</TableCell>
                <TableCell>{order.km}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => {
                      setEditOrder(order);
                      setOpenDialog(true);
                    }}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => deleteOrder(order.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Popup with Formik inside */}
      <PopupBox
        handleDialogBox={handleDialogBox}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        title={editOrder ? 'Edit Order' : 'Add Order'}
      >
        <Formik
          initialValues={{
            partyId: editOrder?.partyId || '',
            material: editOrder?.material || '',
            quantity: editOrder?.quantity || '',
            weight: editOrder?.weight || '',
            from: editOrder?.from || '',
            to: editOrder?.to || '',
            km: editOrder?.km || '',
            amount: editOrder?.amount || ''
          }}
          validationSchema={orderSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="partyId"
                as={TextField}
                select
                fullWidth
                margin="normal"
                label="Select Party"
                error={!!errors.partyId && touched.partyId}
                helperText={touched.partyId && errors.partyId}
              >
                {parties.map(party => (
                  <MenuItem key={party.id} value={party.id}>
                    {party.name}
                  </MenuItem>
                ))}
              </Field>

              <Field name="material" as={TextField} fullWidth label="Material" margin="normal"
                error={!!errors.material && touched.material} helperText={touched.material && errors.material} />

              <Field name="quantity" type="number" as={TextField} fullWidth label="Quantity" margin="normal"
                error={!!errors.quantity && touched.quantity} helperText={touched.quantity && errors.quantity} />

              <Field name="weight" type="number" as={TextField} fullWidth label="Weight" margin="normal"
                error={!!errors.weight && touched.weight} helperText={touched.weight && errors.weight} />

              <Field name="from" as={TextField} fullWidth label="From" margin="normal"
                error={!!errors.from && touched.from} helperText={touched.from && errors.from} />

              <Field name="to" as={TextField} fullWidth label="To" margin="normal"
                error={!!errors.to && touched.to} helperText={touched.to && errors.to} />

              <Field name="km" type="number" as={TextField} fullWidth label="KM" margin="normal"
                error={!!errors.km && touched.km} helperText={touched.km && errors.km} />

              <Field name="amount" type="number" as={TextField} fullWidth label="Amount" margin="normal"
                error={!!errors.amount && touched.amount} helperText={touched.amount && errors.amount} />

              <DialogActions>
                <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                <Button type="submit" variant="contained">
                  {editOrder ? 'Update' : 'Add'}
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </PopupBox>
    </Container>
  );
};

export default Orders;






