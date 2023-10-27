import { THEME_1, THEME_2 } from "../../../../utils/constants/realtimes/theme";
import { HOME_COMPONENT } from "../../../../utils/constants/realtimes/typeComponent";
import MenuInteractive from "../components/MenuInteractive/MenuInteractive";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import ThemeOne from "./themes-layout/first-theme/ThemeOne";
import ThemeTwo from "./themes-layout/second-theme/ThemeTwo";

/**
 * @description Componente que renderiza el layout de la aplicación en tiempo real
 * @param {String} theme
 * @param {Object} data
 * @param {String} typeComponent
 * @returns LayoutRealtime
 */
export default function LayoutRealtime({
  theme,
  data = {},
  dataAbout = {},
  dataContact = {},
  dataCustom = [],
  typeComponent = HOME_COMPONENT,
}) {
  return (
    <div>
      {theme === THEME_1 ? (
        <ThemeOne
          MenuInteractive={MenuInteractive}
          Header={Header}
          Menu={Menu}
          data={data}
          dataAbout={dataAbout}
          dataContact={dataContact}
          dataCustom={dataCustom}
          typeComponent={typeComponent}
          theme={theme}
        />
      ) : theme === THEME_2 ? (
        <ThemeTwo
          Menu={Menu}
          data={data}
          dataAbout={dataAbout}
          dataContact={dataContact}
          dataCustom={dataCustom}
          typeComponent={typeComponent}
          theme={theme}
        />
      ) : null}
    </div>
  );
}
