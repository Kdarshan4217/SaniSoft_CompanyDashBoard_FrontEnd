import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ServiceApp from './routes/ServiceApp';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider> 
      <BrowserRouter>
        <ServiceApp />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;



//  admin@gmail.com   password - admin123