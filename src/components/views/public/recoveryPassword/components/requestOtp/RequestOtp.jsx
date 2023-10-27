import { useContext, useState, useEffect } from "react";
import { message } from "antd";
import { RecoveryContext } from "../../RecoveryPassword";
import { sendCodeEmail } from "../../../../../../utils/api/user";
import { useAlert } from "../../../../../../utils/hooks/useAlert";
import { validationError } from "../../../../../../utils/functions/validation-error";
import LoadingRombo from "../../../../../ui/loadings/loading_rombo/LoadingRombo";
import "@/styles/Components/recovery-password/RequestOtp.css";

export default function RequestOtp() {
  const { emailComplete, otp, setPage, loading, setLoading } =
    useContext(RecoveryContext);
  const [messageApi, contextHolder] = message.useMessage();
  const [time, setTime] = useState(60);
  const [otpInput, setOtpInput] = useState([0, 0, 0, 0]);
  const [disable, setDisable] = useState(true);
  const { openAlert } = useAlert();

  /**
   * @description Este metodo reenvia el codigo de verificacion al correo
   * @returns {void}
   */
  const resendOTP = () => {
    if (disable) return;
    sendCodeEmail(emailComplete, otp)
      .then((res) => {
        if (res.status === 200 || res.data.error === false) {
          setDisable(true);
          setTime(60);
          messageApi.success("Email resend succesfuly");
        }
      })
      .catch((err) => {
        let { title, message, type } = validationError(err);
        openAlert({
          title,
          message,
          type,
        });
      });
  };

  /**
   * @description Este metodo se encarga de verificar que el codigo de verificacion sea correcto
   * @returns {void}
   */
  const verifyOtp = () => {
    setLoading(true);
    if (otpInput.join("") === otp.toString()) {
      setTimeout(() => {
        setLoading(false);
        setPage("reset");
      }, 1500);
      messageApi.success("Codigo de verificacion correcto");
      return;
    }
    openAlert({
      title: "Error",
      message: "El codigo de verificacion es incorrecto",
      type: "error",
    });
    setLoading(false);
    return;
  };

  /**
   * @description Este metodo se encarga de cambiar el foco de los inputs
   * @param {*} e
   * @returns {void}
   */
  const nextInput = (e) => {
    if (e.target.value.length === 1) {
      e.target.nextSibling.focus();
    }

    if (e.target.value.length === 0) {
      e.target.previousSibling.focus();
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setTime((lastTime) => {
        lastTime <= 1 && clearInterval(interval);
        if (lastTime <= 1) setDisable(false);
        if (lastTime <= 0) return lastTime;
        return lastTime - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [disable]);

  return (
    <>
      {contextHolder}
      {loading ? (
        <LoadingRombo complete={true} />
      ) : (
        <div className="requestOtp">
          <h1 className="requestOtp-title">Code verification</h1>
          <p className="requestOtp-message">
            Write the code we sent to your email: <span>{emailComplete}</span>
          </p>
          <div className="requestOtp-contentInputs">
            <input
              type="text"
              maxLength="1"
              onChange={(e) =>
                setOtpInput([
                  e.target.value,
                  otpInput[1],
                  otpInput[2],
                  otpInput[3],
                ])
              }
              onKeyUp={nextInput}
            />
            <input
              type="text"
              maxLength="1"
              onChange={(e) =>
                setOtpInput([
                  otpInput[0],
                  e.target.value,
                  otpInput[2],
                  otpInput[3],
                ])
              }
              onKeyUp={nextInput}
            />
            <input
              type="text"
              maxLength="1"
              onChange={(e) =>
                setOtpInput([
                  otpInput[0],
                  otpInput[1],
                  e.target.value,
                  otpInput[3],
                ])
              }
              onKeyUp={nextInput}
            />
            <input
              type="text"
              maxLength="1"
              onChange={(e) =>
                setOtpInput([
                  otpInput[0],
                  otpInput[1],
                  otpInput[2],
                  e.target.value,
                ])
              }
              onKeyUp={nextInput}
            />
          </div>
          <div className="requestOtp-contentButton">
            <button onClick={verifyOtp} className="requestOtp-send">
              Send
            </button>
          </div>
          <div>
            <p className="requestOtp-messageCode">Didn't recieve code?</p>
            <a
              className={
                disable
                  ? "requestOtp-resend disableResend"
                  : "requestOtp-resend"
              }
              onClick={() => resendOTP()}
            >
              {disable ? `Resend OTP in ${time}s` : "Resend OTP"}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
