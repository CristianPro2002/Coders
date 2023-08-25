import { useSelector } from "react-redux";
import { THEME_1, THEME_2 } from "../../../../../utils/constants/theme";
import { Loading_Page_Products } from "../../../../ui/loadings/loading_products/Index";
import { LANGUAGE } from "../../../../../utils/constants/language";
import { useGetProducts } from "../../../../../utils/hooks/useGetProducts";
import ThemeOne from "./themes-products/first-theme/ThemeOne";
import ThemeTwo from "./themes-products/second-theme/ThemeTwo";

export default function Products() {
  const {
    dataProducts,
    dataSubCategory,
    loadingPage,
    loadingProducts,
    getProductsBySubcategory,
    resetDataSubCategory,
  } = useGetProducts();

  const { theme } = useSelector((state) => state.theme);

  return (
    <>
      {loadingPage ? (
        <Loading_Page_Products />
      ) : (
        <>
          {theme === THEME_1 ? (
            <ThemeOne
              dataProducts={dataProducts}
              LANGUAGE={LANGUAGE}
              getProductsBySubcategory={getProductsBySubcategory}
              dataSubCategory={dataSubCategory}
              loadingProducts={loadingProducts}
              resetDataSubCategory={resetDataSubCategory}
            />
          ) : theme === THEME_2 ? (
            <ThemeTwo
              dataProducts={dataProducts}
              LANGUAGE={LANGUAGE}
              getProductsBySubcategory={getProductsBySubcategory}
              dataSubCategory={dataSubCategory}
              loadingProducts={loadingProducts}
              resetDataSubCategory={resetDataSubCategory}
            />
          ) : null}
        </>
      )}
    </>
  );
}
