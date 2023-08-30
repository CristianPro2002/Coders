import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowIcon } from "../../../../ui/icons/Icons";
import { LANGUAGE } from "../../../../../utils/constants/language";
import { THEME_1, THEME_2 } from "../../../../../utils/constants/theme";
import { useGetDataMenu } from "../../../../../utils/hooks/useGetDataMenu";
import Loading_Categories from "../../../../ui/loadings/loading_categories";
import Slider from "../../../../common/slider/Slider";
import Hero from "../../../../common/hero/Hero";
import ThemeOne from "./themes-categories/first-theme/ThemeOne";
import ThemeTwo from "./themes-categories/second-theme/ThemeTwo";

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
            <ThemeOne
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
            <ThemeTwo
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
