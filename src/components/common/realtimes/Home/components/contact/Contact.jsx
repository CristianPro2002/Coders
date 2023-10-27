import {
  THEME_1,
  THEME_2,
} from "../../../../../../utils/constants/realtimes/theme";
import ThemeOne from "./themes-contact/first-theme/ThemeOne";
import ThemeTwo from "./themes-contact/second-theme/ThemeTwo";

export default function Contact({ contact, theme, data }) {
  const formatHours = (hours) => {
    const separateDaysForSlashes = hours.split("/");
    return separateDaysForSlashes;
  };

  return (
    <>
      {theme === THEME_1 ? (
        <ThemeOne contact={contact} formatHours={formatHours} data={data} />
      ) : theme === THEME_2 ? (
        <ThemeTwo contact={contact} formatHours={formatHours} data={data} />
      ) : null}
    </>
  );
}
