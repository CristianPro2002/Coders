import { THEME_1, THEME_2 } from "../../constants/realtimes/theme";

export const useCustomHome = (theme, data) => {
  /**
   * @description Esta función devuelve el color de fondo o la imagen de fondo del home
   * @returns {string} background color or image
   */
  const homeStyleBackground = () => {
    if (data.home.background_img) {
      return `url(${data.home.background_img})`;
    } else if (data.home.background_color) {
      return data.home.background_color;
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
    if (data.background_img) {
      return `url(${data.background_img})`;
    } else if (data.background_color) {
      return data.background_color;
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
    if (data.background_color) {
      return data.background_color;
    } else if (data.background_img) {
      return `url(${data.background_img})`;
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
    if (data.background_color) {
      return data.background_color;
    } else if (data.background_img) {
      return `url(${data.background_img})`;
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
    homeStyleBackground,
    aboutStyleBackground,
    contactStyleBackground,
    customStyleBackground,
  };
};
