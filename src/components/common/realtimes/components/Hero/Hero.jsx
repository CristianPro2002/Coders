import { Link } from "react-router-dom";
import { THEME_1, THEME_2 } from "@/utils/constants/realtimes/theme";
import ThemeOne from "./themes-hero/first-theme/ThemeOne";
import ThemeTwo from "./themes-hero/second-theme/ThemeTwo";

export default function Hero({ theme, dataPlace, typeComponent }) {
  return (
    <>
      {theme === THEME_1 ? (
        <ThemeOne
          dataPlace={dataPlace}
          Link={Link}
          typeComponent={typeComponent}
        />
      ) : theme === THEME_2 ? (
        <ThemeTwo
          dataPlace={dataPlace}
          Link={Link}
          typeComponent={typeComponent}
        />
      ) : null}
    </>
  );
}
