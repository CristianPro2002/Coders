import { useState } from "react";
import { createContext } from "react";
import {
  PAGE_EMAIL_RECOVERY,
  PAGE_OTP_RECOVERY,
  PAGE_RESET_PASSWORD_RECOVERY,
} from "../../../../utils/constants/typePageRecovery";
import RequestEmail from "./components/requestEmail/RequestEmail";
import RequestOtp from "./components/requestOtp/RequestOtp";
import RequestPassword from "./components/requestPassword/RequestPassword";
import "./RecoveryPassword.css";

export const RecoveryContext = createContext({});
export default function RecoveryPassword() {
  const [page, setPage] = useState(PAGE_EMAIL_RECOVERY);
  const [emailComplete, setEmailComplete] = useState("");
  const [otp, setOtp] = useState(0);
  const [loading, setLoading] = useState(false);

  /**
   * @description Este componente se encarga de renderizar los componentes de la recuperacion de contraseña
   * @returns {JSX.Element}
   */
  function NavigateComponents() {
    if (page === PAGE_EMAIL_RECOVERY) return <RequestEmail />;
    if (page === PAGE_OTP_RECOVERY) return <RequestOtp />;
    if (page === PAGE_RESET_PASSWORD_RECOVERY) return <RequestPassword />;
  }
  return (
    <div className="recoveryPassword">
      <RecoveryContext.Provider
        value={{
          page,
          setPage,
          emailComplete,
          setEmailComplete,
          otp,
          setOtp,
          loading,
          setLoading,
        }}
      >
        <NavigateComponents />
      </RecoveryContext.Provider>
    </div>
  );
}
