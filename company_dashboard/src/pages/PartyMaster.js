import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  IconButton,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useAppContext } from "../context/AppContext";
import PopupBox from "../PopupWindow/Popupwindow";

const partySchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  contact: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
});

const PartyMaster = () => {
  const { parties, addParty, deleteParty } = useAppContext();
  const [openDialog, setOpenDialog] = useState(false);
  const handleDialogBox = () => {
    setOpenDialog(!openDialog);
  };
  const [editParty, setEditParty] = useState(null);

  const handleDelete = (id) => {
    deleteParty(id);
  };

  const handleSubmit = (values, { resetForm }) => {
    if (editParty) {
      deleteParty(editParty.id);
    }
    addParty(values);
    setEditParty(null);
    setOpenDialog(false);
    resetForm();
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Party Master
      </Typography>

      <Button
        variant="contained"
        onClick={() => {
          setEditParty(null);
          setOpenDialog(true);
        }}
      >
        Add New Party
      </Button>

      <Paper elevation={3} sx={{ mt: 2, p: 2 }}>
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
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(party.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Dialog Form */}

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
    </Container>
  );
};

export default PartyMaster;
