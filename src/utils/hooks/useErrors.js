import { useState } from "react";

export const useErrors = () => {
  const [error, setError] = useState("");

  /**
   * @description Este metodo se encarga de manejar los errores que se presenten en la aplicación
   * @param {Object} err
   * @returns {void}
   */
  const handleErrors = (err) => {
    if (err.response) {
      setError(err.response.data.message);
    } else if (err.request) {
      setError("Error de servidor");
    } else if (err) {
      setError(err);
    } else {
      setError("Error de conexión");
    }

    setTimeout(() => {
      setError("");
    }, 3000);
  };

  return {
    error,
    handleErrors,
  };
}
