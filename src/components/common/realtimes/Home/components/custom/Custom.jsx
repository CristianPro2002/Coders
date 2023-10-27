import { useNavigate } from "react-router-dom";
import {
  THEME_1,
  THEME_2,
} from "../../../../../../utils/constants/realtimes/theme";
import Slider from "../../../../../common/realtimes/components/Slider/Slider";
import ThemeOne from "./themes-custom/first-theme/ThemeOne";
import ThemeTwo from "./themes-custom/second-theme/ThemeTwo";

export default function Custom({ custom, theme, data }) {
  const navigate = useNavigate();
  const LANGUAGE = data.dflt_lang;

  /**
   * @description Este metodo se encarga de enviar el id del menu al localstorage y navegar a la vista de categorias
   * @param {String} _id  id del menu
   * @returns {void}
   */
  const sendIdMenu = (_id) => {
    localStorage.setItem("idMenu", _id);
    navigate("Categories");
  };

  /**
   * @description Este metodo se encarga de navegar a la vista de home
   * @returns {void}
   */
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <>
      {theme === THEME_1 ? (
        <ThemeOne
          custom={custom}
          LANGUAGE={LANGUAGE}
          sendIdMenu={sendIdMenu}
          navigateHome={navigateHome}
          Slider={Slider}
        />
      ) : theme === THEME_2 ? (
        <ThemeTwo
          custom={custom}
          LANGUAGE={LANGUAGE}
          sendIdMenu={sendIdMenu}
          navigateHome={navigateHome}
          Slider={Slider}
        />
      ) : null}
    </>
  );
}
