"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowSimpleIcon } from "@/components/ui/icons/Icons";
import { validationLang } from "@/utils/functions/validation-lang";
import styles from "@/styles/Theme/Second-theme/Products/productsList.module.css";

export default function SCProductsList({
  dataProducts,
  dataSubCategory,
  language,
  convertMoney,
}) {
  useEffect(() => {
    let elementsImages = document.querySelectorAll("[name='products-cover']")

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
                <h3>{validationLang(item.name, language)}</h3>
                <p>{validationLang(item.description, language)}</p>
                <span>{convertMoney(item.price)}</span>
              </div>
              <div className={styles["products-arrowlink"]}>
                <Link href="/categories">
                  <ArrowSimpleIcon width="28" height="28" />
                </Link>
              </div>
            </div>
          ))
        : dataProducts.products.map((item, index) => (
            <div className={styles["products-info"]} key={index}>
              <div className={styles["products-cover"]} name="products-cover"></div>
              <div className={styles["products-item"]}>
                <h3>{validationLang(item.name, language)}</h3>
                <p>{validationLang(item.description, language)}</p>
                <span>{convertMoney(item.price)}</span>
              </div>
              <div className={styles["products-arrowlink"]}>
                <Link href="/categories">
                  <ArrowSimpleIcon width="28" height="28" />
                </Link>
              </div>
            </div>
          ))}
    </>
  );
}
