import { useSelector } from "react-redux";
import { THEME_1, THEME_2 } from "../../../../../../../utils/constants/theme";
import { LANGUAGE } from "../../../../../../../utils/constants/language";
import ThemeOne from "./themes-contact/first-theme/ThemeOne";
import ThemeTwo from "./themes-contact/second-theme/ThemeTwo";
import "./contact.css";

export default function Contact({ contact }) {
  let { theme } = useSelector((state) => state.theme);

  const formatHours = (hours) => {
    const separateDaysForSlashes = hours.split("/");
    return separateDaysForSlashes;
  };

  return (
    <>
      {theme === THEME_1 ? (
        <ThemeOne
          contact={contact}
          LANGUAGE={LANGUAGE}
          formatHours={formatHours}
        />
      ) : theme === THEME_2 ? (
        <ThemeTwo
          contact={contact}
          LANGUAGE={LANGUAGE}
          formatHours={formatHours}
        />
      ) : null}
    </>
  );
}
