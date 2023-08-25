import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { THEME_1, THEME_2 } from "../../../utils/constants/theme";
import Menu from "./menu/Menu";
import Header from "../../common/header/Header";
import MenuInteractive from "./menu_interactive/MenuInteractive";
import ThemeOne from "./themes-layout/first-theme/ThemeOne";
import ThemeTwo from "./themes-layout/second-theme/ThemeTwo";

export default function Layout() {
  const [menuInteractive, setMenuInteractive] = useState(false);
  let { theme } = useSelector((state) => state.theme);

  return (
    <>
      {theme === THEME_1 ? (
        <ThemeOne
          menuInteractive={menuInteractive}
          setMenuInteractive={setMenuInteractive}
          MenuInteractive={MenuInteractive}
          Header={Header}
          Menu={Menu}
          Outlet={Outlet}
        />
      ) : theme === THEME_2 ? (
        <ThemeTwo Outlet={Outlet} Menu={Menu} />
      ) : null}
    </>
  );
}
