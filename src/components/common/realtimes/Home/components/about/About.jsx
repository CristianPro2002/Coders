import {
  THEME_1,
  THEME_2,
} from "../../../../../../utils/constants/realtimes/theme";
import ThemeOne from "./themes-about/first-theme/ThemeOne";
import ThemeTwo from "./themes-about/second-theme/ThemeTwo";

export default function About({ about, theme, data }) {
  return (
    <>
      {theme === THEME_1 ? (
        <ThemeOne about={about} data={data} />
      ) : theme === THEME_2 ? (
        <ThemeTwo about={about} data={data} />
      ) : null}
    </>
  );
}
