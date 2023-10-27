import axios from "axios";
import endPoints from "../../config/endpoints/client";
import { tokenValidation } from "../interceptors/token-validation";

const { baseAccounts } = endPoints.accounts;

/**
 * @description Esta función obtiene todas las cuentas.
 * @returns {Promise<Object>}
 */
export const getAccounts = async () => {
  return await axios.get(baseAccounts);
};

/**
 * @description Esta función obtiene una cuenta por id.
 * @param {String} id 
 * @returns {Promise<Object>}
 */
export const getAccount = async (id) => {
  return new Promise((resolve, reject) => {
    if (!id) return reject({ message: "Error: id is missing" });
    tokenValidation()
      .then((response) => {
        if (response) {
          try {
            const data = axios.get(baseAccounts + id);
            resolve(data);
          } catch (err) {
            console.log(err);
            reject(err);
          }
        } else {
          reject({ message: "Tu sesión ha expirado", sesion: true });
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
  // if (!id) return console.log("Error: id is missing");
  // if (id) return await axios.get(`${baseAccounts}/${id}`);
};

/**
 * @description Esta función obtiene una cuenta por id.
 * @param {Object} data
 * @returns {Promise<Object>}
 */
export const postAccount = async (data) => {
  console.log(data);
  if (!data) return console.log("Error: data is missing");
  if (data) return await axios.post(baseAccounts, data);
};
