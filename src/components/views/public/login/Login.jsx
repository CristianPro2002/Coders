import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GoogleOutlined } from "@ant-design/icons";
import { useGoogleLogin } from "@react-oauth/google";
import { message } from "antd";
import { PATHSPROJECT } from "../../../../utils/constants/pathsProject";
import { PAGE_LOGIN_EMAIL } from "../../../../utils/constants/pageLogin";
import { useErrors } from "../../../../utils/hooks/useErrors";
import { useSubmitsLogin } from "../../../../utils/hooks/useSubmitsLogin";
import { getUserGoogle } from "../../../../utils/api/google";
import { useAlert } from "../../../../utils/hooks/useAlert";
import { validationError } from "../../../../utils/functions/validation-error";
import LoadingRombo from "../../../ui/loadings/loading_rombo/LoadingRombo";
import "./Login.css";

export default function Login({ setIsLoggedIn }) {
  const [messageApi, contextHolder] = message.useMessage();
  const [page, setPage] = useState(PAGE_LOGIN_EMAIL); // 1: login-home, 2: login-email
  const { error, handleErrors } = useErrors();
  const {
    handleSubmit,
    handleGoogleSubmit,
    loading,
    setLoading,
    user,
    setUser,
  } = useSubmitsLogin({ setIsLoggedIn, handleErrors });
  const navigate = useNavigate();
  const { recovery, register } = PATHSPROJECT;
  const { openAlert } = useAlert();

  /**
   * @description Este metodo se encarga de cambiar el estado de los inputs
   * @param {*} e
   * @returns {void}
   */
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * @description Este metodo se encarga de redireccionar a la pagina de recuperacion de contraseña
   * @returns {void}
   */
  const recoverPassword = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(recovery);
    }, 1000);
  };

  const loginGoogle = useGoogleLogin({
    onSuccess: (res) => {
      getUserGoogle(res)
        .then((res) => {
          handleGoogleSubmit(res);
        })
        .catch((err) => {
          let { message, type } = validationError(err);
          openAlert({
            title: "Error con tu cuenta de google",
            message,
            type,
          });
        });
    },
    onError: (err) => {
      let { message, type } = validationError(err);
      openAlert({
        title: "Error con tu cuenta de google",
        message,
        type,
      });
    },
  });

  useEffect(() => {
    messageApi.warning("Inicia sesión para continuar", 2.5);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingRombo complete={true} />
      ) : (
        <>
          <section className="login">
            {contextHolder}
            {page === PAGE_LOGIN_EMAIL ? (
              <>
                <main className="login-content">
                  <div className="login-contentLink">
                    You are not registered?
                    <Link className="login-linkSignup" to={register}>
                      Register now
                    </Link>
                  </div>
                  <span className="login-title">Welcome</span>
                  <p className="login-subtitle">
                    Live the adventure of managing your site
                  </p>
                  <div className="login-contentOther">
                    <button
                      onClick={loginGoogle}
                      className="login-buttonGoogle"
                    >
                      login with google
                      <GoogleOutlined className="login-IconGoogle" />
                    </button>
                    <p className="login-textOther">Or login with email</p>
                  </div>
                  <form onSubmit={handleSubmit} className="login-form">
                    <input
                      type="text"
                      placeholder="username"
                      name="username"
                      onChange={handleChange}
                      value={user.username}
                      id="username"
                      className="login-inputUsername"
                    />
                    <input
                      type="password"
                      placeholder="password"
                      name="password"
                      onChange={handleChange}
                      value={user.password}
                      id="password"
                      className="login-inputPassword"
                    />
                    <p className="login-recpassword" onClick={recoverPassword}>
                      Forgot your password?
                    </p>
                    {error.length ? (
                      <p className="login-error">{error}</p>
                    ) : null}
                    <div className="login-contentNext">
                      <button>Continue</button>
                    </div>
                  </form>
                </main>
              </>
            ) : null}
          </section>
        </>
      )}
    </>
  );
}
