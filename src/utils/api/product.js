import axios from "axios";
import appMenu from "../../config/endpoints/client";

const { baseProducts } = appMenu.products;

export const getProducts = id => {
    return axios.get(`${baseProducts}category/${id}`   )
};