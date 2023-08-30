import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { THEME_1, THEME_2 } from "../../../utils/constants/theme";
import ThemeOne from "./themes-hero/first-theme/ThemeOne";
import ThemeTwo from "./themes-hero/second-theme/ThemeTwo";

export default function Hero() {
  const dataPlace = useSelector((state) => state.place);
  const { theme } = useSelector((state) => state.theme);
  const location = useLocation();
  return (
    <>
      {theme === THEME_1 ? (
        <ThemeOne dataPlace={dataPlace} Link={Link} location={location.pathname} />
      ) : theme === THEME_2 ? (
        <ThemeTwo dataPlace={dataPlace} Link={Link} location={location.pathname} />
      ) : null}
    </>
  );
}
