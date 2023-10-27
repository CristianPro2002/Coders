import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { THEME_1, THEME_2 } from "../../../../../utils/constants/realtimes/theme";
import ThemeOne from "./themes-menu/first-theme/ThemeOne";
import ThemeTwo from "./themes-menu/second-theme/ThemeTwo";

export default function Menu({data, theme}) {
  const [stateMenu, setStateMenu] = useState(false);
  const location = useLocation();
  const LANGUAGE = data.dflt_lang;
  useEffect(() => {
    const locationArray = location.pathname.split("/");
    locationArray.includes("Categories")
      ? setStateMenu(true)
      : setStateMenu(false);
  }, [location.pathname]);

  return (
    <>
      {theme === THEME_1 ? (
        <ThemeOne
          dataPlace={data}
          stateMenu={stateMenu}
          LANGUAGE={LANGUAGE}
          Link={Link}
        />
      ) : theme === THEME_2 ? (
        <ThemeTwo
          dataPlace={data}
          stateMenu={stateMenu}
          LANGUAGE={LANGUAGE}
          Link={Link}
        />
      ) : null}
    </>
  );
}
