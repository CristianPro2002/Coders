import { useContext } from "react";
import { AlertContext } from "../../config/context/AlertContext";

export const useAlert = () => useContext(AlertContext);
