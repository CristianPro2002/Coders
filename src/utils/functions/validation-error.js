/**
 * @description Función que retorna un objeto con los datos para mostrar un mensaje de error
 * @param {Object} err
 * @returns  {Object} {title: string, message: string, type: string}
 */
export const validationError = (err) => {
  if (err.sesion) {
    return { title: "Error de Sesión", message: err.message, type: "error" };
  } else if (err.personalized) {
    return {
      title: "Error",
      message: err.message || "Ocurrio un error con tu solicitud",
      type: "error",
    };
  } else {
    return {
      title: "Error",
      message: err.response.data.message
        ? err.response.data.message
        : "Ocurrio un error",
      type: "error",
    };
  }
};
