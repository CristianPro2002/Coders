"use client";

import { useSelector } from "react-redux";
import { THEME_1, THEME_2 } from "@/utils/constants/theme";
import { LANGUAGE } from "@/utils/constants/language";
import FirstThemeAbout from "./themes-about/first-theme/first-theme-about";
import SecondThemeAbout from "./themes-about/second-theme/second-theme-about";

export default function About({ about }) {
  let { theme } = useSelector((state) => state.theme);

  return (
    <>
      {theme === THEME_1 ? (
        <FirstThemeAbout about={about} LANGUAGE={LANGUAGE} />
      ) : theme === THEME_2 ? (
        <SecondThemeAbout about={about} LANGUAGE={LANGUAGE} />
      ) : null}
    </>
  );
}
