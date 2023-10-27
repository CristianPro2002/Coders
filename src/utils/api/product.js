import axios from "axios";
import endPoints from "../../config/endpoints/client";
import { tokenValidation } from "../interceptors/token-validation";

const { productsByCategory, productsByAccount } = endPoints.products;

/**
 * @description Esta función obtiene todos los productos por categoría.
 * @param {String} id
 * @returns {Promise<Object>}
 */
export const getProducts = (id) => {
  if (!id) return console.log("Error: id is missing");
  if (id) return axios.get(productsByCategory + id);
};

export const getProductsByAccount = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) return reject({ message: "Error: id is missing", personalized: true });
    tokenValidation()
      .then((response) => {
        if (response) {
          try {
            const data = axios.get(productsByAccount + id);
            resolve(data);
          } catch (err) {
            resolve(err);
          }
        } else {
          reject({ message: "Tu sesión ha expirado", sesion: true });
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};
