import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  DialogActions,
  IconButton,
  TextField,
  useMediaQuery
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useAppContext } from "../context/AppContext";
import PopupBox from "../PopupWindow/Popupwindow";
import Page from "./Page";
import { motion } from "framer-motion";
import '../styles/Card.css'; // ✅ Importing shared card style

import {
  pageWrapper,
  contentContainer,
  paperBox,
  headingMotion,
  tableHeaderCell
} from "../styles/pageStyles";

const partySchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  contact: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
});

const PartyMaster = () => {
  const { parties, addParty, deleteParty } = useAppContext();
  const [openDialog, setOpenDialog] = useState(false);
  const [editParty, setEditParty] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [refreshKey, setRefreshKey] = useState(0);

  const handleDialogBox = () => setOpenDialog(!openDialog);

  const handleDelete = (id) => {
    deleteParty(id);
    setRefreshKey((prev) => prev + 1);
  };

  const handleSubmit = (values, { resetForm }) => {
    if (editParty) deleteParty(editParty.id);
    addParty(values);
    setEditParty(null);
    setOpenDialog(false);
    resetForm();
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <Page>
      <Box sx={pageWrapper}>
        <Box sx={contentContainer}>
          <motion.div {...headingMotion}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Party Master
            </Typography>
            <Typography sx={{ color: "gray", mb: 2 }}>
              Manage your business parties with ease.
            </Typography>
          </motion.div>

          <Button
            variant="contained"
            sx={{ mb: 2 }}
            onClick={() => {
              setEditParty(null);
              setOpenDialog(true);
            }}
          >
            + Add New Party
          </Button>

          {!isMobile && (
            <Box sx={{ width: "100%", overflowX: "auto" }}>
              <Paper elevation={3} sx={{ minWidth: 600, ...paperBox }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={tableHeaderCell}>Name</TableCell>
                      <TableCell sx={tableHeaderCell}>Contact</TableCell>
                      <TableCell sx={tableHeaderCell}>City</TableCell>
                      <TableCell sx={tableHeaderCell}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {parties.map((party) => (
                      <TableRow key={party.id}>
                        <TableCell>{party.name}</TableCell>
                        <TableCell>{party.contact}</TableCell>
                        <TableCell>{party.city}</TableCell>
                        <TableCell>
                          <IconButton
                            onClick={() => {
                              setEditParty(party);
                              setOpenDialog(true);
                            }}
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                          <IconButton onClick={() => handleDelete(party.id)}>
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Box>
          )}

          {isMobile && (
            <Box key={refreshKey}>
              {parties.map((party) => (
                <Box key={party.id} className="order-card">
                  <div className="order-row">
                    <span className="order-label">Name :</span>
                    <span className="order-value">{party.name}</span>
                  </div>
                  <div className="order-row">
                    <span className="order-label">Contact :</span>
                    <span className="order-value">{party.contact}</span>
                  </div>
                  <div className="order-row">
                    <span className="order-label">City :</span>
                    <span className="order-value">{party.city}</span>
                  </div>
                  <Box mt={1}>
                    <IconButton
                      onClick={() => {
                        setEditParty(party);
                        setOpenDialog(true);
                      }}
                      aria-label="edit"
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDelete(party.id)}
                      aria-label="delete"
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>

      <PopupBox
        handleDialogBox={handleDialogBox}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        title={editParty ? "Edit Party" : "Add Party"}
      >
        <Formik
          initialValues={{
            name: editParty?.name || "",
            contact: editParty?.contact || "",
            city: editParty?.city || "",
          }}
          validationSchema={partySchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                as={TextField}
                name="name"
                label="Name"
                fullWidth
                margin="normal"
                error={touched.name && !!errors.name}
                helperText={touched.name && errors.name}
              />
              <Field
                as={TextField}
                name="contact"
                label="Contact"
                fullWidth
                margin="normal"
                error={touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
              />
              <Field
                as={TextField}
                name="city"
                label="City"
                fullWidth
                margin="normal"
                error={touched.city && !!errors.city}
                helperText={touched.city && errors.city}
              />

              <DialogActions>
                <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                <Button type="submit" variant="contained">
                  {editParty ? "Update" : "Add"}
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </PopupBox>
    </Page>
  );
};

export default PartyMaster;
