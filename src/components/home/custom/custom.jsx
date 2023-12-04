"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { LANGUAGE } from "@/utils/constants/language";
import { THEME_1, THEME_2 } from "@/utils/constants/theme";
import Slider from "@/components/common/slider/slider";
import FirstThemeCustom from "./themes-custom/first-theme/first-theme-custom";
import SecondThemeCustom from "./themes-custom/second-theme/second-theme-custom";

export default function Custom({ custom }) {
  const router = useRouter();
  let { theme } = useSelector((state) => state.theme);

  /**
   * @description Este metodo se encarga de enviar el id del menu al localstorage y navegar a la vista de categorias
   * @param {String} _id  id del menu
   * @returns {void}
   */
  const sendIdMenu = (_id) => {
    localStorage.setItem("idMenu", _id);
    router.push("/categories");
  };

  /**
   * @description Este metodo se encarga de navegar a la vista de home
   * @returns {void}
   */
  const navigateHome = () => {
    router.push("/");
  };

  return (
    <>
      {theme === THEME_1 ? (
        <FirstThemeCustom
          custom={custom}
          LANGUAGE={LANGUAGE}
          sendIdMenu={sendIdMenu}
          navigateHome={navigateHome}
          Slider={Slider}
        />
      ) : theme === THEME_2 ? (
        <SecondThemeCustom
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
