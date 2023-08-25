import axios from "axios";
import appMenu from "../../config/endpoints/client";

const { baseSubCategories } = appMenu.subcategories;

export const getProductsBySubCategory = id => {
    return axios.get(`${baseSubCategories}products/${id}`)
};