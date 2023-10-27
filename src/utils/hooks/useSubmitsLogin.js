import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { addUser } from "../../config/redux/slices/sliceUser";
import { loginAdmin } from "../api/user";
import { getUser } from "../api/user";
import { addVarToken, setUserId } from "../functions/auth-helpers";
import { resetForm } from "../functions/reset-form";
import { PATHSPROJECT } from "../constants/pathsProject";
import { loginAdminGoogle } from "../api/user";
import { useAlert } from "./useAlert";
import { validationError } from "../functions/validation-error";

export const useSubmitsLogin = ({ setIsLoggedIn, handleErrors }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dashboard } = PATHSPROJECT;
  const { openAlert } = useAlert();

  /**
   * @description Este metodo se encarga de recargar la pagina y redireccionar al dashboard
   * @returns {void}
   */
  const redirection = () => {
    setIsLoggedIn(true);
    navigate(dashboard);
  };

  /**
   * @description Este metodo se encarga de enviar los datos al servidor para loguearse
   * @param {*} e
   * @returns {void}
   */
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    loginAdmin(user)
      .then((res) => {
        if (res.data.error === false || res.status === 200) {
          addVarToken(res.data.data.accessToken, res.data.data.refreshToken);
          const decoded = jwt_decode(res.data.data.accessToken);
          getUser(decoded.user._id)
            .then((res) => {
              dispatch(addUser(res.data.data));
              setUserId(res.data.data._id);
            })
            .catch((err) => {
              const { title, message, type } = validationError(err);
              openAlert({ title, message, type });
            });
          resetForm(setUser, user);
          redirection();
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        handleErrors(err);
        setLoading(false);
      });
  }

  /**
   * @description Este metodo se encarga de validar el login con google
   * @param {*} res  Este parametro contiene la respuesta del usuario que se logueo con google
   * @returns {void}
   */
  function handleGoogleSubmit(res) {
    loginAdminGoogle({
      username: res.data.email,
    })
      .then((resLogin) => {
        if (resLogin.status === 200 || resLogin.data.error === false) {
          addVarToken(
            resLogin.data.data.accessToken,
            resLogin.data.data.refreshToken
          );
          const decoded = jwt_decode(resLogin.data.data.accessToken);
          getUser(decoded.user._id)
            .then((res) => {
              dispatch(addUser(res.data.data));
              setUserId(res.data.data._id);
            })
            .catch((err) => {
              const { title, message, type } = validationError(err);
              openAlert({ title, message, type });
            });
          redirection();
        } else {
          openAlert({
            title: "Error de autenticación",
            message: "Usuario no registrado",
            type: "error",
          });
        }
      })
      .catch((err) => {
        const { message, type } = validationError(err);
        openAlert({ title: "Error de autenticación", message, type });
      });
  }

  return {
    handleSubmit,
    handleGoogleSubmit,
    loading,
    setLoading,
    user,
    setUser,
  };
};
