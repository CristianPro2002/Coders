import axios from "axios";
import endPoints from "../../config/endpoints/client";

const { baseCategories, categoriesByMenu, productsByCategory } =
  endPoints.categories;

/**
 * @description Esta función obtiene todas las categorías por menú.
 * @param {String} id
 * @returns {Promise<Object>}
 */
export const getCategoriesByMenu = (id) => {
  if (!id) return console.log("Error: id is missing");
  if (id) return axios.get(categoriesByMenu + id);
};

/**
 * @description Esta función obtiene todos los productos por categoría.
 * @param {String} id
 * @returns {Promise<Object>}
 */
export const getProductsByCategory = (id) => {
  if (!id) return console.log("Error: id is missing");
  if (id) return axios.get(productsByCategory + id);
};

/**
 * @description Esta función obtiene una categoría por id.
 * @param {String} id
 * @returns
 */
export const getCategory = (id) => {
  if (!id) return console.log("Error: id is missing");
  if (id) return axios.get(baseCategories + id);
};
