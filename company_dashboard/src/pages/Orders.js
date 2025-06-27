
import React, { useState } from 'react';
import {
  Box, Typography, Table, TableHead, TableRow,
  TableCell, TableBody, Button, Paper, TextField,
  MenuItem, IconButton, DialogActions, useMediaQuery
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Edit, Delete } from '@mui/icons-material';
import { useAppContext } from '../context/AppContext';
import PopupBox from '../PopupWindow/Popupwindow';
import Page from './Page';
import {
  pageWrapper,
  contentContainer,
  paperBox,
  tableHeaderCell
} from '../styles/pageStyles';
import '../styles/Card.css'; // ✅ Importing card CSS here

const orderSchema = Yup.object({
  partyId: Yup.string().required('Party is required'),
  material: Yup.string().required('Material is required'),
  quantity: Yup.number().positive('Quantity must be positive').required('Quantity required'),
  weight: Yup.number().positive('Weight must be positive').required('Weight required'),
  from: Yup.string().required('From location required'),
  to: Yup.string().required('To location required'),
  km: Yup.number().positive('KM must be positive').required('KM required'),
  amount: Yup.number().positive('Amount must be positive').required('Amount required')
});

const Orders = () => {
  const { parties, orders, addOrder, updateOrder, deleteOrder } = useAppContext();
  const [editOrder, setEditOrder] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleDialogBox = () => setOpenDialog(!openDialog);

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
    <Page>
      <Box sx={pageWrapper}>
        <Box sx={contentContainer}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Orders
          </Typography>

          <Button
            variant="contained"
            sx={{ mb: 2 }}
            onClick={() => {
              setEditOrder(null);
              setOpenDialog(true);
            }}
          >
            + Add Order
          </Button>

          {/* ✅ Desktop View - Table */}
          {!isMobile && (
            <Box sx={{ width: '100%', overflowX: 'auto' }}>
              <Paper elevation={3} sx={{ minWidth: 800, ...paperBox }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={tableHeaderCell}>Party</TableCell>
                      <TableCell sx={tableHeaderCell}>Material</TableCell>
                      <TableCell sx={tableHeaderCell}>Quantity</TableCell>
                      <TableCell sx={tableHeaderCell}>Weight</TableCell>
                      <TableCell sx={tableHeaderCell}>From</TableCell>
                      <TableCell sx={tableHeaderCell}>To</TableCell>
                      <TableCell sx={tableHeaderCell}>KM</TableCell>
                      <TableCell sx={tableHeaderCell}>Amount</TableCell>
                      <TableCell sx={tableHeaderCell}>Actions</TableCell>
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
                          <IconButton onClick={() => {
                            setEditOrder(order);
                            setOpenDialog(true);
                          }}>
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
            </Box>
          )}

          {/* ✅ Mobile View - Styled Card */}
          {isMobile && (
            <Box>
              {orders.map(order => {
                const party = parties.find(p => p.id === order.partyId);
                return (
                  <Box key={order.id} className="order-card">
                    <div className="order-row">
                      <span className="order-label">Party :</span>
                      <span className="order-value">{party?.name || 'Unknown'}</span>
                    </div>
                    <div className="order-row">
                      <span className="order-label">Material :</span>
                      <span className="order-value">{order.material}</span>
                    </div>
                    <div className="order-row">
                      <span className="order-label">Quantity :</span>
                      <span className="order-value">{order.quantity}</span>
                    </div>
                    <div className="order-row">
                      <span className="order-label">Weight :</span>
                      <span className="order-value">{order.weight}</span>
                    </div>
                    <div className="order-row">
                      <span className="order-label">From :</span>
                      <span className="order-value">{order.from}</span>
                    </div>
                    <div className="order-row">
                      <span className="order-label">To :</span>
                      <span className="order-value">{order.to}</span>
                    </div>
                    <div className="order-row">
                      <span className="order-label">KM :</span>
                      <span className="order-value">{order.km}</span>
                    </div>
                    <div className="order-row">
                      <span className="order-label">Amount :</span>
                      <span className="order-value">₹{order.amount}</span>
                    </div>
                    <Box mt={1}>
                      <IconButton onClick={() => {
                        setEditOrder(order);
                        setOpenDialog(true);
                      }}>
                        <Edit fontSize="small" />
                      </IconButton>
                      <IconButton onClick={() => deleteOrder(order.id)}>
                        <Delete fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          )}
        </Box>
      </Box>

      {/* ✅ Popup Form */}
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
            from: 'Ichalkaranji',
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

              <Field
                name="quantity"
                type="number"
                as={TextField}
                fullWidth
                label="Quantity"
                margin="normal"
                inputProps={{ min: 1 }}
                onWheel={(e) => e.target.blur()}
                error={!!errors.quantity && touched.quantity}
                helperText={touched.quantity && errors.quantity}
              />

              <Field
                name="weight"
                type="number"
                as={TextField}
                fullWidth
                label="Weight"
                margin="normal"
                inputProps={{ min: 1 }}
                onWheel={(e) => e.target.blur()}
                error={!!errors.weight && touched.weight}
                helperText={touched.weight && errors.weight}
              />

              <TextField fullWidth margin="normal" label="From" value="Ichalkaranji" disabled />

              <Field name="to" as={TextField} fullWidth label="To" margin="normal"
                error={!!errors.to && touched.to} helperText={touched.to && errors.to} />

              <Field
                name="km"
                type="number"
                as={TextField}
                fullWidth
                label="KM"
                margin="normal"
                inputProps={{ min: 1 }}
                onWheel={(e) => e.target.blur()}
                error={!!errors.km && touched.km}
                helperText={touched.km && errors.km}
              />

              <Field
                name="amount"
                type="number"
                as={TextField}
                fullWidth
                label="Amount"
                margin="normal"
                inputProps={{ min: 1 }}
                onWheel={(e) => e.target.blur()}
                error={!!errors.amount && touched.amount}
                helperText={touched.amount && errors.amount}
              />

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
    </Page>
  );
};

export default Orders;








