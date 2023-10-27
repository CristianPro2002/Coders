import axios from "axios";
import endPoints from "../../config/endpoints/client";

const { tokenDomain, baseDomains } = endPoints.dominios;

/**
 * @description Esta funcion obtiene el dominio de un proveedor.
 * @param {String} dominio
 * @param {String} format
 * @returns {Promise<Object>}
 */
export const getVerifySupplierDomain = (dominio, format = "json") => {
  if (!dominio) return console.log("Error: dominio is missing");
  const headers = {
    Authorization: tokenDomain,
  };
  if (dominio)
    return axios.get(`${baseDomains}${dominio}&format=${format}`, { headers });
};
