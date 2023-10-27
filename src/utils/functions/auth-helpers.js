/**
 * @description Este metodo se encarga de agregar el token al localStorage
 * @param {*} token
 * @returns {void}
 */
export const setToken = (token) => {
  localStorage.setItem("token", token);
};

/**
 * @description Este metodo se encarga de agregar el refreshToken al localStorage
 * @param {*} refreshToken
 * @returns {void}
 */
export const setRefreshToken = (refreshToken) => {
  localStorage.setItem("refreshToken", refreshToken);
};

/**
 * @description Este metodo se encarga de obtener el token del localStorage
 * @returns {String} token
 */
export const getToken = () => {
  return localStorage.getItem("token");
};

/**
 * @description Este metodo se encarga de obtener el refreshToken del localStorage
 * @returns {String} refreshToken
 */
export const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

/**
 * @description Este metodo se encarga de eliminar el token del localStorage
 * @returns {void}
 */
export const removeToken = () => {
  localStorage.removeItem("token");
};

/**
 * @description Este metodo se encarga de eliminar el refreshToken del localStorage
 * @returns {void}
 */
export const removeRefreshToken = () => {
  localStorage.removeItem("refreshToken");
};

/**
 * @description Este metodo se encarga de agregar las variables de token y refreshToken al localStorage
 * @param {String} token token de acceso
 * @param {String} refreshToken token de refresco
 * @returns {void}
 */
export const addVarToken = (token, refreshToken) => {
  setToken(token);
  setRefreshToken(refreshToken);
};

/**
 * @description Este metodo se encarga de agregar el id del usuario al localStorage
 * @param {*} userId
 * @returns {void} 
 */
export const setUserId = userId => {
  localStorage.setItem("userId", userId);
}; 

/**
 * @description Este metodo se encarga de obtener el id del usuario del localStorage
 * @returns {String} userId
 */
export const getUserId = () => {
  return localStorage.getItem("userId");
};

/**
 * @description Este metodo se encarga de eliminar el id del usuario del localStorage
 * @returns {void}
 */
export const removeUserId = () => {
  localStorage.removeItem("userId");
};