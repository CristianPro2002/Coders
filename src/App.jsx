import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useDispatch } from "react-redux";
import { addPlace } from "./config/redux/slices/slicePlace";
import { getPlace } from "./utils/api/place";
import { addTheme } from "./config/redux/slices/sliceTheme";
import Router from "./config/routes";
import "./index.css";

const socket = io("http://localhost:4000");

export default function App() {
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();

  const mobileMediaQuery = window.matchMedia(
    "(max-width: 768px) and (min-width: 360px)"
  );

  mobileMediaQuery.addEventListener("change", (e) => {
    setDisplay(e.matches);
  });

  useEffect(() => {
    socket.on("connect", () => {
      console.log("conectado");
    });

    socket.on("get_account", (data) => {
      console.log("entro", data);
    });
  }, [socket]);

  useEffect(() => {
    document.title = "APP - MENU";

    setDisplay(window.innerWidth < 769 && window.innerWidth > 359);

    getPlace("6470ce35bedff07c5cc81fbe")
      .then((res) => {
        dispatch(addPlace(res.data));
        dispatch(addTheme({ theme: res.data.theme }));
        localStorage.setItem("language", res.data.dflt_lang);
        localStorage.setItem("theme", res.data.theme);
      })
      .catch((err) => console.log(err));
  }, []);

  return <>{display ? <Router /> : null}</>;
}
