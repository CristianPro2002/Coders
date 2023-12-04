"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Link from "next/link";
import { LANGUAGE } from "@/utils/constants/language";
import { THEME_1, THEME_2 } from "@/utils/constants/theme";
import ThemeOne from "./themes-menu/first-theme/ThemeOne";
import ThemeTwo from "./themes-menu/second-theme/ThemeTwo";

export default function Menu() {
  const [stateMenu, setStateMenu] = useState(false);
  const router = usePathname();
  const dataPlace = useSelector((state) => state.place);
  let { theme } = useSelector((state) => state.theme);
  useEffect(() => {
    const locationArray = router.split("/");
    locationArray.includes("Categories")
      ? setStateMenu(true)
      : setStateMenu(false);
  }, [router]);

  return (
    <>
      {theme === THEME_1 ? (
        <ThemeOne
          dataPlace={dataPlace}
          stateMenu={stateMenu}
          LANGUAGE={LANGUAGE}
          Link={Link}
        />
      ) : theme === THEME_2 ? (
        <ThemeTwo
          dataPlace={dataPlace}
          stateMenu={stateMenu}
          LANGUAGE={LANGUAGE}
          Link={Link}
        />
      ) : null}
    </>
  );
}
