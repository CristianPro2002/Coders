import axios from "axios";
import endPoints from "../../config/endpoints/client";

const { google0auth2 } = endPoints.google;

/**
 * @description Esta función obtiene el usuario de google.
 * @param {Object} data
 * @returns {Promise<Object>}
 */
export const getUserGoogle = async (data) => {
  if (!data) return console.log("Error: data is missing");
  if (data)
    return await axios.get(google0auth2, {
      headers: {
        Authorization: `Bearer ${data.access_token}`,
      },
    });
};
