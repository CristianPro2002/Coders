import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LANGUAGE } from "../../../../../../../utils/constants/language";
import { THEME_1, THEME_2 } from "../../../../../../../utils/constants/theme";
import Slider from "../../../../../../common/slider/Slider";
import ThemeOne from "./themes-custom/first-theme/ThemeOne";
import ThemeTwo from "./themes-custom/second-theme/ThemeTwo";

export default function Custom({ custom }) {
  const navigate = useNavigate();
  let { theme } = useSelector((state) => state.theme);

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
