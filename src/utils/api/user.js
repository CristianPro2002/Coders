import axios from "axios";
import endPoints from "../../config/endpoints/client";

const {
  login,
  loginGoogle,
  validToken,
  loadRefreshToken,
  validRefreshToken,
  sendEmail,
  resetPassword,
  baseUsers,
  logout,
} = endPoints.users;

/**
 * @description Esta función realiza el login por email y password.
 * @param {Object} data
 * @returns {Promise<Object>}
 */
export const loginAdmin = (data) => {
  return new Promise((resolve, reject) => {
    try {
      if (!data) {
        reject({ message: "No se encuentra tu email" });
        return;
      }
      const response = axios.post(login, data);
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * @description Esta función realiza el login por google.
 * @param {Object} data
 * @returns {Promise<Object>}
 */
export const loginAdminGoogle = (data) => {
  return new Promise((resolve, reject) => {
    try {
      if (!data) {
        reject({ message: "No se encuentra tu email" });
        return;
      }
      const response = axios.post(loginGoogle, data);
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * @description Esta función valida el token.
 * @param {String} token
 * @returns {Promise<Object>}
 */
export const validateToken = (token) => {
  return new Promise((resolve, reject) => {
    try {
      if (!token) {
        reject({ message: "No se encuentra el token" });
        return;
      }
      const response = axios.post(validToken, { accessToken: token });
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * @description Esta función elimina el refresh token.
 * @param {String} refresh
 * @returns {Promise<Object>}
 */
export const logoutUser = (refresh) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios.post(logout, { refreshToken: refresh });
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * @description Esta función actualiza el token.
 * @param {String} refresh
 * @returns {Promise<Object>}
 */
export const refreshToken = (refresh) => {
  return new Promise((resolve, reject) => {
    try {
      if (!refresh) {
        reject({ message: "No se encuentra el refresh token" });
        return;
      }
      const response = axios.post(loadRefreshToken, { refreshToken: refresh });
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * @description Esta función valida el refresh token.
 * @param {String} refresh
 * @returns {Promise<Object>}
 */
export const validateRefreshToken = (refresh) => {
  return new Promise((resolve, reject) => {
    try {
      if (!refresh) {
        reject({ message: "No se encuentra el refresh token" });
        return;
      }
      const response = axios.post(validRefreshToken, { refreshToken: refresh });
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * @description Esta función envía el código al servidor para enviar el email.
 * @param {String} email
 * @param {String} code
 * @returns {Promise<Object>}
 */
export const sendCodeEmail = (email, code) => {
  return new Promise((resolve, reject) => {
    try {
      if (!email || !code) {
        reject({ message: "No se encuentra el email o el código" });
        return;
      }
      const response = axios.post(sendEmail, { email, code });
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * @description Esta función realiza el proceso de reseteo de contraseña.
 * @param {Object} data
 * @returns {Promise<Object>}
 */
export const resetPasswordAdmin = (data) => {
  return new Promise((resolve, reject) => {
    try {
      if (!data) {
        reject({ message: "Por favor escribe tu contraseña" });
        return;
      }
      const response = axios.post(resetPassword, data);
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * @description Esta función obtiene el usuario por id.
 * @param {String} id
 * @returns {Promise<Object>}
 */
export const getUser = (id) => {
  return new Promise((resolve, reject) => {
    try {
      if (!id) {
        reject({ message: "No se encuentra el id" });
        return;
      }
      const response = axios.get(baseUsers + id);
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};
