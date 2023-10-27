import axios from "axios";
import { getValidationError } from "../functions/get-validation-error";

export const AxiosInterceptor = () => {
  /**
   * @description Funcion que se encarga de validar si existe un token en el localstorage y si existe lo agrega al header de la peticion
   * @returns {request}
   * @param {*} request
   */
  const updateToken = (request) => {
    const token = localStorage.getItem("token");

    if (request.headers["Authorization"]) {
      if (request.headers["Authorization"].includes("Token")) {
        return request;
      }
    }

    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`;
      request.headers["Content-Type"] = "application/json";
    }
    return request;
  };

  /**
   * @description Funcion que se encarga de validar si existe un token en el localstorage y si existe lo agrega al header de la peticion, funcion especial para el envio de archivos
   * @param {*} request
   * @returns {request}
   */
  const updateTokenAssets = (request) => {
    const token = localStorage.getItem("token");

    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`;
      request.headers["Content-Type"] = "multipart/form-data";
    }
    return request;
  };

  axios.interceptors.request.use((request) => {
    if (request.url.includes("assets")) updateTokenAssets(request);
    return updateToken(request);
  });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // if (error.response.status === 401) {
      //     localStorage.removeItem("token");
      //     localStorage.removeItem("place");
      //     localStorage.removeItem("language");
      //     window.location.href = "/login";
      // }
      console.log(getValidationError(error.code));
      return Promise.reject(error);
    }
  );
};

export default AxiosInterceptor;
