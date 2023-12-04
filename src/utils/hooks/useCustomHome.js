import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { THEME_1, THEME_2 } from "@/utils/constants/theme";

export const useCustomHome = () => {
  const [loading, setLoading] = useState(true);
  let dataPlace = useSelector((state) => state.place);
  let { theme } = useSelector((state) => state.theme);
  let { _id, logo, name, home, about_us, contact_us, customs } = dataPlace;

  useEffect(() => {
    localStorage.setItem("place", _id);
  }, [dataPlace]);

  /**
   * @description Esta función devuelve el color de fondo o la imagen de fondo del home
   * @returns {string} background color or image
   */
  const homeStyleBackground = () => {
    if (home.background_img) {
      return `url(${home.background_img})`;
    } else if (home.background_color) {
      return home.background_color;
    } else {
      switch (theme) {
        case THEME_1:
          return "#ffffff";
        case THEME_2:
          return "#222222";
        default:
          return "#ffffff";
      }
    }
  };

  /**
   * @description Esta función devuelve el color de fondo o la imagen de fondo del about
   * @returns {string} background color or image
   */
  const aboutStyleBackground = () => {
    if (about_us.background_color) {
      return about_us.background_color;
    } else if (about_us.background_img) {
      return `url(${about_us.background_img})`;
    } else {
      switch (theme) {
        case THEME_1:
          return "#ffffff";
        case THEME_2:
          return "#222222";
        default:
          return "#ffffff";
      }
    }
  };

  /**
   * @description Esta función devuelve el color de fondo o la imagen de fondo del contact
   * @returns {string} background color or image
   */
  const contactStyleBackground = () => {
    if (contact_us.background_color) {
      return contact_us.background_color;
    } else if (contact_us.background_img) {
      return `url(${contact_us.background_img})`;
    } else {
      switch (theme) {
        case THEME_1:
          return "#ffffff";
        case THEME_2:
          return "#222222";
        default:
          return "#ffffff";
      }
    }
  };

  /**
   * @description Esta función devuelve el color de fondo o la imagen de fondo del custom
   * @returns {string} background color or image
   */
  const customStyleBackground = () => {
    if (customs.background_color) {
      return customs.background_color;
    } else if (customs.background_img) {
      return `url(${customs.background_img})`;
    } else {
      switch (theme) {
        case THEME_1:
          return "#ffffff";
        case THEME_2:
          return "#222222";
        default:
          return "#ffffff";
      }
    }
  };

  return {
    loading,
    setLoading,
    logo,
    name,
    home,
    about_us,
    contact_us,
    customs,
    homeStyleBackground,
    aboutStyleBackground,
    contactStyleBackground,
    customStyleBackground,
  };
};
