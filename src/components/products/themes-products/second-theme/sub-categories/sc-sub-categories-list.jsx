import { validationLang } from "@/utils/functions/validation-lang";
import styles from "@/styles/Theme/Second-theme/Products/subCategoriesList.module.css";

export default function SCSubCategoriesList({
  dataProducts,
  getProductsBySubcategory,
  language,
  resetDataSubCategory,
}) {
  return (
    <>
      <div
        className={`${styles["products-description"]} ${styles["special"]}`}
        onClick={resetDataSubCategory}
      >
        <h3>All</h3>
      </div>
      {dataProducts.subcategories.map((item, index) => (
        <div
          className={styles["products-description"]}
          onClick={() => getProductsBySubcategory(item._id)}
          key={index}
        >
          <h3>{validationLang(item.name, language)}</h3>
        </div>
      ))}
    </>
  );
}
