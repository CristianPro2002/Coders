import { useEffect } from "react";
import { io } from "socket.io-client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CLIENT_GOOGLE } from "./utils/constants/clientGoogle";
import { getRefreshToken, getToken } from "./utils/functions/auth-helpers";
import Router from "./config/routes";
import "./index.css";

const socket = io("http://localhost:4000");

export default function App() {
  const token = getToken();
  const refreshToken = getRefreshToken();
  const stateAuth = token || refreshToken ? true : false;

  useEffect(() => {
    socket.on("connect", () => {
      console.log("conectado");
    });

    socket.on("get_account", (data) => {
      console.log("entro", data);
    });
  }, [socket]);

  return (
    <GoogleOAuthProvider clientId={CLIENT_GOOGLE.clientId}>
      <Router stateAuth={stateAuth} />
    </GoogleOAuthProvider>
  );
}
