import axios from "axios";
import endPoints from "../../config/endpoints/client";

const { baseMenus } = endPoints.menus;

/**
 * @description Esta función obtiene todos los menús.
 * @returns {Promise<Object>}
 */
export const getMenus = () => {
  return axios.get(baseMenus);
};

/**
 * @description Esta función obtiene un menú por id.
 * @param {String} id
 * @returns {Promise<Object>}
 */
export const getMenu = (id) => {
  if (!id) return console.log("Error: id is missing");
  if (id) return axios.get(baseMenus + id);
};
