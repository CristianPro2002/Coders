import axios from "axios";
import appMenu from "../../config/endpoints/client";

const { login, loginGoogle, validToken, loadRefreshToken, validRefreshToken, sendEmail, resetPassword } = appMenu.users;

export const loginAdmin = data => {
    return axios.post(login, data)
};

export const loginAdminGoogle = data => {
    return axios.post(loginGoogle, data)
};

export const validateToken = token => {
    return axios.post(validToken, { accessToken: token })
};

export const refreshToken = refresh => {
    return axios.post(loadRefreshToken, { refreshToken: refresh })
};

export const validateRefreshToken = refresh => {
    return axios.post(validRefreshToken, { refreshToken: refresh })
};

export const sendCodeEmail = (email, code) => {
    return axios.post(sendEmail, { email, code })
};

export const resetPasswordAdmin = data => {
    return axios.post(resetPassword, data)
};