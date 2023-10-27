import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { RecoveryContext } from "../../RecoveryPassword";
import { sendCodeEmail } from "../../../../../../utils/api/user";
import { PATHSPROJECT } from "../../../../../../utils/constants/pathsProject";
import { validationError } from "../../../../../../utils/functions/validation-error";
import { useAlert } from "../../../../../../utils/hooks/useAlert";
import LoadingRombo from "../../../../../ui/loadings/loading_rombo/LoadingRombo";
import "@/styles/Components/recovery-password/RequestEmail.css";

export default function RequestEmail() {
  const { setPage, setEmailComplete, setOtp, loading, setLoading } =
    useContext(RecoveryContext);
  const [email, setEmail] = useState("");
  const { openAlert } = useAlert();
  const { login } = PATHSPROJECT;

  /**
   * @description Este metodo se encarga de enviar el codigo de verificacion al correo
   * @param {*} e
   * @returns {void}
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const OTP = Math.floor(Math.random() * 9000 + 1000);
    setOtp(OTP);
    sendCodeEmail(email, OTP)
      .then((res) => {
        if (res.status === 200 || res.data.error === false) {
          setEmailComplete(email);
          setPage("otp");
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
      })
      .finally(() => {
        setLoading(false);
      });
  };

  /**
   * @description Este metodo se encarga de cambiar el valor del input
   * @param {*} e
   * @returns {void}
   */
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      {loading ? (
        <LoadingRombo complete={true} />
      ) : (
        <section className="requestEmail">
          <div className="requestEmail-contentTitle">
            <h1 className="requestEmail-title">Enter Your Email</h1>
            <p className="requestEmail-subtitle">
              Enter your email to receive a verification code
            </p>
          </div>
          <Link className="requestEmail-linkLogin" to={login}>
            <ArrowLeftOutlined className="requestEmail-icon" />
          </Link>
          <form className="requestEmail-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your email"
              onChange={handleChange}
              value={email}
            />
            <button type="submit">Send</button>
          </form>
        </section>
      )}
    </>
  );
}
