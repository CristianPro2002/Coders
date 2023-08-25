import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../../../../ui/icons/Icons";
import { Loading_Products } from "../../../../../../ui/loadings/loading_products";
import { convertMoney } from "../../../../../../../utils/functions/convert";
import Hero from "../../../../../../common/hero/Hero";
import SubCategoriesList from "./components/subcategories-list/SubCategoriesList";
import ProductsList from "./components/products-list/ProductsList";
import styles from "./ThemeTwo.module.css";

export default function ThemeTwo({
  dataProducts,
  LANGUAGE,
  getProductsBySubcategory,
  dataSubCategory,
  loadingProducts,
  resetDataSubCategory,
}) {
  return (
    <div className={styles["products"]}>
      <div className={styles["products-arrow"]}>
        <Link to="/Categories">
          <ArrowIcon />
        </Link>
      </div>
      <Hero />
      <div className={styles["products-data"]}>
        {dataProducts.name ? (
          <h2 className={styles["products-data-title"]}>
            {dataProducts.name[LANGUAGE]}
          </h2>
        ) : null}
        <section className={styles["products-subcategories"]}>
          {dataProducts.subcategories ? (
            <SubCategoriesList
              dataProducts={dataProducts}
              getProductsBySubcategory={getProductsBySubcategory}
              language={LANGUAGE}
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
                <ProductsList
                  dataProducts={dataProducts}
                  dataSubCategory={dataSubCategory}
                  language={LANGUAGE}
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
