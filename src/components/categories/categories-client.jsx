"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { ArrowIcon } from "@/components/ui/icons/Icons";
import { LANGUAGE } from "@/utils/constants/language";
import { THEME_1, THEME_2 } from "@/utils/constants/theme";
import { useGetDataMenu } from "@/utils/hooks/useGetDataMenu";
import Loading_Categories from "@/components/ui/loadings/loading_categories/Index";
import Slider from "@/components/common/slider/slider";
import Hero from "@/components/common/hero/Hero";
import FirstThemeCategories from "./themes-categories/first-theme/first-theme-categories";
import SecondThemeCategories from "./themes-categories/second-theme/second-theme-categories";

export default function Categories() {
  const { dataCategory, dataMenu, loading, handleClick } = useGetDataMenu();
  const { theme } = useSelector((state) => state.theme);

  return (
    <>
      {loading ? (
        <Loading_Categories />
      ) : (
        <>
          {theme === THEME_1 ? (
            <FirstThemeCategories
              dataCategory={dataCategory}
              dataMenu={dataMenu}
              Link={Link}
              ArrowIcon={ArrowIcon}
              Hero={Hero}
              LANGUAGE={LANGUAGE}
              handleClick={handleClick}
              Slider={Slider}
            />
          ) : theme === THEME_2 ? (
            <SecondThemeCategories
              dataCategory={dataCategory}
              dataMenu={dataMenu}
              Link={Link}
              ArrowIcon={ArrowIcon}
              Hero={Hero}
              LANGUAGE={LANGUAGE}
              handleClick={handleClick}
              Slider={Slider}
            />
          ) : null}
        </>
      )}
    </>
  );
}
