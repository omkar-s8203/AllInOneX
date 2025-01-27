import React, { createContext, useState, useContext } from 'react';

// Create a context
const AlertContext = createContext();

// Create a custom hook to use the context
export const useAlert = () => {
  return useContext(AlertContext);
};

// Create a provider component
export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ message: '', type: '', visible: false });

  const showAlert = (message, type) => {
    setAlert({ message, type, visible: true });
    setTimeout(() => {
      setAlert({ ...alert, visible: false });
    }, 5000); // Hide alert after 5 seconds
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
