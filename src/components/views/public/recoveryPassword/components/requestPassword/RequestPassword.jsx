import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { RecoveryContext } from "../../RecoveryPassword";
import { resetPasswordAdmin } from "../../../../../../utils/api/user";
import { PATHSPROJECT } from "../../../../../../utils/constants/pathsProject";
import { useAlert } from "../../../../../../utils/hooks/useAlert";
import { validationError } from "../../../../../../utils/functions/validation-error";
import LoadingRombo from "../../../../../ui/loadings/loading_rombo/LoadingRombo";
import "@/styles/Components/recovery-password/RequestPassword.css";

export default function RequestPassword() {
  const [messageApi, contextHolder] = message.useMessage();
  const { emailComplete, loading, setLoading } = useContext(RecoveryContext);
  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  });
  const { openAlert } = useAlert();

  const { login } = PATHSPROJECT;

  const navigate = useNavigate();

  /**
   * @description Este metodo se encarga de cambiar el estado de los inputs
   * @param {*} e
   * @returns {void}
   */
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * @description Este metodo se encarga de enviar los datos al servidor para resetear la contraseña
   * @param {*} e
   * @returns {void}
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (data.password !== data.confirmPassword) {
      messageApi.error("Las contraseñas no coinciden");
      setLoading(false);
      return;
    }

    let dataComplete = {
      email: emailComplete,
      password: data.password,
    };

    resetPasswordAdmin(dataComplete)
      .then((res) => {
        setLoading(false);
        if (res.status === 200 || res.data.error === false) {
          navigate(login);
        }
      })
      .catch((err) => {
        let { title, message, type } = validationError(err);
        setLoading(false);
        openAlert({
          title,
          message,
          type,
        });
      });
  };

  return (
    <>
      {contextHolder}
      {loading ? (
        <LoadingRombo complete={true} />
      ) : (
        <div className="requestPassword">
          <span className="requestPassword-title">Recovery Password</span>
          <p className="requestPassword-message">
            Enter your new password to reset your password
          </p>
          <form onSubmit={handleSubmit} className="requestPassword-form">
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="confirm password"
              name="confirmPassword"
              onChange={handleChange}
            />
            <button>Send</button>
          </form>
        </div>
      )}
    </>
  );
}
