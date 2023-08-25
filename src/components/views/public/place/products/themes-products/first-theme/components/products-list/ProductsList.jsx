import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowSimpleIcon } from "../../../../../../../../ui/icons/Icons";
import styles from "./ProductsList.module.css";

export default function ProductsList({
  dataProducts,
  dataSubCategory,
  language,
  convertMoney,
}) {
  useEffect(() => {
    console.log(dataSubCategory);
    let elementsImages = document.querySelectorAll("[name='products-cover']");

    if (elementsImages.length > 0) {
      elementsImages.forEach((element, index) => {
        element.style.backgroundImage = `url(${dataProducts.products[index].image})`;
        element.style.backgroundSize = "cover";
        element.style.backgroundPosition = "center";
        element.style.backgroundRepeat = "no-repeat";
        element.style.filter = "drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.25))";
      });
    }
  }, [dataProducts]);
  return (
    <>
      {dataSubCategory.length > 0
        ? dataSubCategory.map((item, index) => (
            <div className={styles["products-info"]} key={index}>
              <div
                className={styles["products-cover"]}
                name="products-cover"
              ></div>
              <div className={styles["products-item"]}>
                <h3>{item.name[language]}</h3>
                <p>{item.description[language]}</p>
                <span>{convertMoney(item.price)}</span>
              </div>
              <div className={styles["products-arrowlink"]}>
                <Link to="/Categories">
                  <ArrowSimpleIcon width="28" height="28" />
                </Link>
              </div>
            </div>
          ))
        : dataProducts.products.map((item, index) => (
            <div className={styles["products-info"]} key={index}>
              <div
                className={styles["products-cover"]}
                name="products-cover"
              ></div>
              <div className={styles["products-item"]}>
                <h3>{item.name[language]}</h3>
                <p>{item.description[language]}</p>
                <span>{convertMoney(item.price)}</span>
              </div>
              <div className={styles["products-arrowlink"]}>
                <Link to="/Categories">
                  <ArrowSimpleIcon width="28" height="28" />
                </Link>
              </div>
            </div>
          ))}
    </>
  );
}
