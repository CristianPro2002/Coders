import { useState } from "react";
import { message } from "antd";
import { useErrors } from "./useErrors";
import { postAccount } from "../api/account";
import {
  STEP_FIRST_PAGE,
  STEP_SECOND_PAGE,
  STEP_THIRD_PAGE,
  STEP_CONGRATULATIONS_PAGE,
} from "../constants/stepRegisterPage";
import { INITIAL_REGISTER_USER } from "../constants/initialFormUser";
import { useAlert } from "./useAlert";
import { validationError } from "../functions/validation-error";

export const useSubmitsRegister = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(STEP_FIRST_PAGE); // 1: register-first, 2: register-second, 3: register-third, 4: register-congratulations
  const [user, setUser] = useState(INITIAL_REGISTER_USER);
  const { handleErrors, error } = useErrors();
  const { openAlert } = useAlert();

  /**
   * @description Funcion que valida los campos del formulario
   * @returns {boolean}
   */
  const validateSteps = {
    /**
     * @description Funcion que valida los campos del formulario de la primera pagina
     * @returns {boolean}
     */
    stepOne: () => {
      if (user.name === "") {
        handleErrors("Name is required");
        return false;
      } else if (user.phone === "") {
        handleErrors("Number is required");
        return false;
      } else if (user.email === "") {
        handleErrors("Email is required");
        return false;
      } else if (user.password === "") {
        handleErrors("Password is required");
        return false;
      } else {
        return true;
      }
    },

    /**
     * @description Funcion que valida los campos del formulario de la segunda pagina
     * @returns {boolean}
     */
    stepTwo: () => {
      if (user.country === "") {
        handleErrors("Country is required");
        return false;
      } else if (user.city === "") {
        handleErrors("City is required");
        return false;
      } else if (user.state === "") {
        handleErrors("State is required");
        return false;
      } else if (user.address_one === "") {
        handleErrors("Address is required");
        return false;
      } else if (user.address_two === "") {
        handleErrors("Address is required");
        return false;
      } else {
        return true;
      }
    },

    /**
     * @description Funcion que valida los campos del formulario de la tercera pagina
     * @returns {boolean}
     */
    stepThree: () => {
      if (user.business_name === "") {
        handleErrors("Company name is required");
        return false;
      } else if (user.zip_code === "") {
        handleErrors("Zip code is required");
        return false;
      } else if (user.vat_id === "") {
        handleErrors("NIF is required");
        return false;
      } else {
        return true;
      }
    },
  };

  /**
   * @description Funcion que valida los datos del formulario de la primer pagina y cambia de pagina
   * @param {*} e
   * @returns {void}
   */
  const handleSubmitStepOne = (e) => {
    e.preventDefault();
    const validate = validateSteps.stepOne();
    if (validate) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setPage(STEP_SECOND_PAGE);
      }, 2000);
    }
  };

  /**
   * @description Funcion que valida los datos del formulario de la segunda pagina y cambia de pagina
   * @param {*} e
   * @returns {void}
   */
  const handleSubmitStepTwo = (e) => {
    e.preventDefault();
    const validate = validateSteps.stepTwo();
    if (validate) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setPage(STEP_THIRD_PAGE);
      }, 2000);
    }
  };

  /**
   * @description Funcion que valida y envia los datos del formulario de la tercera pagina al backend y cambia de pagina
   * @param {*} e
   * @returns {void}
   */
  const handleSubmitStepThree = (e) => {
    e.preventDefault();
    const validate = validateSteps.stepThree();
    if (validate) {
      setLoading(true);
      postAccount(user)
        .then((res) => {
          setLoading(false);
          if (res.data.error === false || res.status === 200) {
            setPage(STEP_CONGRATULATIONS_PAGE);
          }
        })
        .catch((err) => {
          const { message, type } = validationError(err);
          setLoading(false);
          openAlert({ title: "Error de registro", message, type });
        });
    }
  };

  /**
   * @description Funcion que actualiza el estado de los campos del formulario
   * @param {*} e
   * @returns {void}
   */
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return {
    messageApi,
    contextHolder,
    loading,
    page,
    setPage,
    user,
    error,
    handleSubmitStepOne,
    handleSubmitStepTwo,
    handleSubmitStepThree,
    handleChange,
  };
};
