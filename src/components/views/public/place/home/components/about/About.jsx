import { useSelector } from "react-redux";
import { THEME_1, THEME_2 } from "../../../../../../../utils/constants/theme";
import { LANGUAGE } from "../../../../../../../utils/constants/language";
import "./about.css";
import ThemeOne from "./themes-about/first-theme/ThemeOne";
import ThemeTwo from "./themes-about/second-theme/ThemeTwo";

export default function About({ about }) {
  let { theme } = useSelector((state) => state.theme);

  return (
    <>
      {theme === THEME_1 ? (
        <ThemeOne about={about} LANGUAGE={LANGUAGE} />
      ) : theme === THEME_2 ? (
        <ThemeTwo about={about} LANGUAGE={LANGUAGE} />
      ) : null}
    </>
  );
}
