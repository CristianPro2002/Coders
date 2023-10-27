import { validateToken, refreshToken } from "../api/user";
import {
  setToken,
  getRefreshToken,
  removeToken,
  removeRefreshToken,
  removeUserId,
  getToken,
} from "../functions/auth-helpers";

/**
 * @description Funcion que valida el token de autenticacion y refresca el token de autenticacion
 * @returns {boolean}
 */
export const tokenValidation = async () => {
  let token = getToken();
  let refreshTokenValidate = getRefreshToken();
  try {
    const response = await validateToken(token);
    if (response.status === 200) {
      return true;
    } else {
      const responseRefresh = await refreshToken(refreshTokenValidate);
      if (
        responseRefresh.status === 200 ||
        responseRefresh.data.error === false
      ) {
        setToken(responseRefresh.data.data.accessToken);
        return true;
      } else {
        removeToken();
        removeUserId();
        removeRefreshToken();
        return false;
      }
    }
  } catch (error) {
    const responseRefresh = await refreshToken(refreshTokenValidate);
    if (
      responseRefresh.status === 200 ||
      responseRefresh.data.error === false
    ) {
      setToken(responseRefresh.data.data.accessToken);
      return true;
    } else {
      removeToken();
      removeUserId();
      removeRefreshToken();
      return false;
    }
  }
};
