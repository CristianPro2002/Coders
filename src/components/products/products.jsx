"use client";

import { useSelector } from "react-redux";
import { THEME_1, THEME_2 } from "@/utils/constants/theme";
import { Loading_Page_Products } from "@/components/ui/loadings/loading_products/Index";
import { LANGUAGE } from "@/utils/constants/language";
import { useGetProducts } from "@/utils/hooks/useGetProducts";
import FirstThemeProducts from "./themes-products/first-theme/first-theme-products";
import SecondThemeProducts from "./themes-products/second-theme/second-theme-products";

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
            <FirstThemeProducts
              dataProducts={dataProducts}
              language={LANGUAGE}
              getProductsBySubcategory={getProductsBySubcategory}
              dataSubCategory={dataSubCategory}
              loadingProducts={loadingProducts}
              resetDataSubCategory={resetDataSubCategory}
            />
          ) : theme === THEME_2 ? (
            <SecondThemeProducts
              dataProducts={dataProducts}
              language={LANGUAGE}
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
