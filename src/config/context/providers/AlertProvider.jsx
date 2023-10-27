import { useState } from "react";
import { AlertContext } from "../AlertContext";
// Crea el contexto

export function AlertProvider({ children }) {
  const [alert, setAlert] = useState({
    title: "",
    message: "",
    isOpen: false,
    type: "",
  });

  const openAlert = ({ title = "", message, type }) => {
    setAlert({ title, message, isOpen: true, type });
  };

  const closeAlert = () => {
    setAlert({ title: "", message: "", isOpen: false, type: "" });
  };

  return (
    <AlertContext.Provider value={{ alert, openAlert, closeAlert }}>
      {children}
    </AlertContext.Provider>
  );
}
