import Link from "next/link";
import { ArrowIcon } from "@/components/ui/icons/Icons";
import { Loading_Products } from "@/components/ui/loadings/loading_products/Index";
import { convertMoney } from "@/utils/functions/convert";
import { validationLang } from "@/utils/functions/validation-lang";
import Hero from "@/components/common/hero/Hero";
import SCSubCategoriesList from "./sub-categories/sc-sub-categories-list";
import SCProductsList from "./products-list/sc-products-list";
import styles from "@/styles/Theme/Second-theme/Products/products.module.css";

export default function SecondThemeProducts({
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
            <SCSubCategoriesList
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
                <SCProductsList
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
