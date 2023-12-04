import Link from "next/link";
import { ArrowIcon } from "@/components/ui/icons/Icons";
import { Loading_Products } from "@/components/ui/loadings/loading_products/Index";
import { validationLang } from "@/utils/functions/validation-lang";
import { convertMoney } from "@/utils/functions/convert";
import Hero from "@/components/common/hero/Hero";
import FTSubCategoriesList from "./sub-categories/ft-sub-categories-list";
import FTProductsList from "./products-list/ft-products-list";
import styles from "@/styles/Theme/First-theme/Products/products.module.css";

export default function FirstThemeProducts({
  dataProducts,
  language,
  getProductsBySubcategory,
  dataSubCategory,
  loadingProducts,
  resetDataSubCategory,
}) {
  return (
    <div className={styles["products"]}>
      <div className={styles["products-arrow"]}>
        <Link href="/categories">
          <ArrowIcon />
        </Link>
      </div>
      <Hero />
      <div className={styles["products-data"]}>
        {dataProducts.name ? (
          <h2 className={styles["products-data-title"]}>
            {validationLang(dataProducts.name, language)}
          </h2>
        ) : null}
        <section className={styles["products-subcategories"]}>
          {dataProducts.subcategories ? (
            <FTSubCategoriesList
              dataProducts={dataProducts}
              getProductsBySubcategory={getProductsBySubcategory}
              language={language}
              resetDataSubCategory={resetDataSubCategory}
            />
          ) : null}
        </section>
        <section className={styles["products-items"]}>
          {loadingProducts ? (
            <Loading_Products />
          ) : (
            <>
             {dataProducts.products ? (
                <FTProductsList
                  dataProducts={dataProducts}
                  dataSubCategory={dataSubCategory}
                  language={language}
                  convertMoney={convertMoney}
                />
              ) : null}
            </>
          )}
        </section>
      </div>
    </div>
  );
}
