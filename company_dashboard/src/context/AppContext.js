import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [parties, setParties] = useState([]);
  const [orders, setOrders] = useState([]);
  const [companies, setCompanies] = useState([]);

  const addParty = (party) => {
    setParties((prev) => [...prev, { ...party, id: Date.now() }]);
  };

  const deleteParty = (id) => {
    setParties((prev) => prev.filter((p) => p.id !== id));
    setOrders((prev) => prev.filter((o) => o.partyId !== id));
  };

  const addOrder = (order) => {
    setOrders((prev) => [...prev, { ...order, id: Date.now() }]);
  };

  const updateOrder = (id, updatedOrder) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...updatedOrder, id } : o)));
  };

  const deleteOrder = (id) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  const addCompany = (company) => {
    setCompanies((prev) => [...prev, { ...company, id: Date.now() }]);
  };

  return (
    <AppContext.Provider
      value={{
        parties,
        orders,
        companies,
        addParty,
        deleteParty,
        addOrder,
        updateOrder,
        deleteOrder,
        addCompany,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);


