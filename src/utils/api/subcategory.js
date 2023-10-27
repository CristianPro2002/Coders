import axios from "axios";
import endPoints from "../../config/endpoints/client";

const { productsBySubCategory } = endPoints.subcategories;

/**
 * @description Esta función obtiene todos los productos por subcategoría.
 * @param {String} id
 * @returns {Promise<Object>}
 */
export const getProductsBySubCategory = (id) => {
  if (!id) return console.log("Error: id is missing");
  if (id) return axios.get(productsBySubCategory + id);
};
