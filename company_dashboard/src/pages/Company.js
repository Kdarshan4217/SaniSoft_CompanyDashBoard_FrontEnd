
import React, { useState } from "react";
import {
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
  useMediaQuery,
  Card,
  CardContent
} from "@mui/material";
import { useAppContext } from "../context/AppContext";
import {
  contentContainer,
  paperBox,
  tableHeaderCell,
} from "../styles/pageStyles";
import MobileWrapper from "../components/MobileWrapper";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "../styles/Card.css"; // ✅ import CSS

const Company = () => {
  const { parties, orders } = useAppContext();
  const [openPartyId, setOpenPartyId] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");

  const toggleOrders = (id) => {
    setOpenPartyId(openPartyId === id ? null : id);
  };

  return (
    <MobileWrapper>
      <Box sx={contentContainer}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Company Details
        </Typography>

        {/* ✅ Desktop View */}
        {!isMobile && (
          <Paper elevation={3} sx={paperBox}>
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
                  <React.Fragment key={party.id}>
                    <TableRow>
                      <TableCell>{party.name}</TableCell>
                      <TableCell>{party.contact}</TableCell>
                      <TableCell>{party.city}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => toggleOrders(party.id)}
                        >
                          {openPartyId === party.id ? "Hide Orders" : "View Orders"}
                        </Button>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell colSpan={4} sx={{ p: 0 }}>
                        <Collapse
                          in={openPartyId === party.id}
                          timeout="auto"
                          unmountOnExit
                        >
                          <Box sx={{ m: 2 }}>
                            <Typography
                              variant="subtitle1"
                              fontWeight="bold"
                              gutterBottom
                            >
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
                                      <TableCell>₹{order.amount}</TableCell>
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
        )}

        {/* ✅ Mobile View */}
        {isMobile && (
          <>
            {parties.map((party) => (
              <Card key={party.id} sx={{ mb: 2, backgroundColor: "#fff" }}>
                <CardContent>
                  <Typography fontWeight="bold">{party.name}</Typography>
                  <Typography variant="body2">Contact: {party.contact}</Typography>
                  <Typography variant="body2">City: {party.city}</Typography>

                  <Button
                    size="small"
                    endIcon={openPartyId === party.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    onClick={() => toggleOrders(party.id)}
                    sx={{ mt: 1 }}
                    variant="outlined"
                  >
                    {openPartyId === party.id ? "Hide Orders" : "View Orders"}
                  </Button>

                  <Collapse in={openPartyId === party.id} timeout="auto" unmountOnExit>
                    <Box mt={2}>
                      <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                        Orders:
                      </Typography>

                      {orders.filter((o) => o.partyId === party.id).length === 0 ? (
                        <Typography className="no-orders">No orders found.</Typography>
                      ) : (
                        orders
                          .filter((o) => o.partyId === party.id)
                          .map((order) => (
                            <Box key={order.id} className="order-card">
                              <div className="order-field">
                                <span className="order-label">Material :</span>
                                <span className="order-value">{order.material}</span>
                              </div>
                              <div className="order-field">
                                <span className="order-label">Quantity :</span>
                                <span className="order-value">{order.quantity}</span>
                              </div>
                              <div className="order-field">
                                <span className="order-label">Weight :</span>
                                <span className="order-value">{order.weight}</span>
                              </div>
                              <div className="order-field">
                                <span className="order-label">From :</span>
                                <span className="order-value">{order.from}</span>
                              </div>
                              <div className="order-field">
                                <span className="order-label">To :</span>
                                <span className="order-value">{order.to}</span>
                              </div>
                              <div className="order-field">
                                <span className="order-label">KM :</span>
                                <span className="order-value">{order.km}</span>
                              </div>
                              <div className="order-field">
                                <span className="order-label">Amount :</span>
                                <span className="order-value">₹{order.amount}</span>
                              </div>
                            </Box>
                          ))
                      )}
                    </Box>
                  </Collapse>
                </CardContent>
              </Card>
            ))}
          </>
        )}
      </Box>
    </MobileWrapper>
  );
};

export default Company;




