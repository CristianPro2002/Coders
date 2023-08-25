import axios from 'axios'
import appMenu from "../../config/endpoints/client";

const { baseCategories } = appMenu.categories;

export const getCategoriesByMenu = id => {
    return axios.get(`${baseCategories}menu/${id}`)
}

export const getProductByCategory = id => {
    return axios.get(`${baseCategories}products/${id}`)
}

export const getCategory = id => {
    return axios.get(`${baseCategories}${id}`)
}; 