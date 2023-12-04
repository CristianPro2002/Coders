"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ThemeFirstLayout from "./theme-first-layout";
import ThemeSecondLayout from "./theme-second-layout";
import { getPlace } from "@/utils/api/place";
import { addPlace } from "@/config/redux/slices/slicePlace";
import { addTheme } from "@/config/redux/slices/sliceTheme";

export default function ThemesLayout({ children }) {
  const [theme, setTheme] = useState("theme1");
  const [display, setDisplay] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    getPlace("6470ce35bedff07c5cc81fbe")
      .then((res) => {
        if (res.data.error === false && res.data.data) {
          dispatch(addPlace(res.data.data));
          dispatch(addTheme({ theme: res.data.data.theme }));
          localStorage.setItem("language", res.data.data.dflt_lang);
          localStorage.setItem("theme", res.data.data.theme);
          setTheme(res.data.data.theme);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setDisplay(window.innerWidth < 769 && window.innerWidth > 359);
  }, []);
  return (
    <>
      {display && (
        <>
          {theme === "theme1" ? (
            <ThemeFirstLayout>{children}</ThemeFirstLayout>
          ) : theme === "theme2" ? (
            <ThemeSecondLayout>{children}</ThemeSecondLayout>
          ) : null}
        </>
      )}
    </>
  );
}
