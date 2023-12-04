"use client";

import { useSelector } from "react-redux";
import { THEME_1, THEME_2 } from "@/utils/constants/theme";
import { LANGUAGE } from "@/utils/constants/language";
import FirstThemeContact from "./themes-contact/first-theme/first-theme-contact";
import SecondThemeContact from "./themes-contact/second-theme/second-theme-contact";

export default function Contact({ contact }) {
  let { theme } = useSelector((state) => state.theme);

  const formatHours = (hours) => {
    const separateDaysForSlashes = hours.split("/");
    return separateDaysForSlashes;
  };

  return (
    <>
      {theme === THEME_1 ? (
        <FirstThemeContact
          contact={contact}
          LANGUAGE={LANGUAGE}
          formatHours={formatHours}
        />
      ) : theme === THEME_2 ? (
        <SecondThemeContact
          contact={contact}
          LANGUAGE={LANGUAGE}
          formatHours={formatHours}
        />
      ) : null}
    </>
  );
}
