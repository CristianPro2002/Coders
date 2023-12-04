import axios from "axios";
import appMenu from "../../config/endpoints/client";

const { baseAccounts } = appMenu.accounts;

export const getAccounts = async () => {
    return await axios.get(baseAccounts);
};