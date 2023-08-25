import axios from 'axios'
import appMenu from "../../config/endpoints/client";

const { baseMenus } = appMenu.menus;

export const getMenus = () => {
    return axios.get(baseMenus)
}

export const getMenu = id => {
    return axios.get(`${baseMenus}${id}`)
}; 