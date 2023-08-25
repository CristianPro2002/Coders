import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProductByCategory } from "../api/category";
import { getProductsBySubCategory } from "../api/subcategory";

export const useGetProducts = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [dataSubCategory, setDataSubCategory] = useState([]);
  const [loadingPage, setLoadingPage] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(false);

  const location = useLocation();
  const idLocation = location.pathname.split("/")[2];

  /**
   * @description Esta funcion se encarga de obtener los productos de una subcategoria
   * @param {String} id
   * @returns {void}
   */
  const getProductsBySubcategory = (id) => {
    setLoadingProducts(true);
    getProductsBySubCategory(id)
      .then((res) => {
        setDataSubCategory(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingProducts(false);
      });
  };

  /**
   * @description Esta funcion se encarga de resetear el estado de dataSubCategory
   * @returns {void}
   */
  const resetDataSubCategory = () => {
    setLoadingProducts(true);
    setTimeout(() => {
      setLoadingProducts(false);
    }, 500);
    setDataSubCategory([]);
  };

  useEffect(() => {
    const dataProducts = getProductByCategory(idLocation);
    dataProducts
      .then((values) => {
        setDataProducts(values.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingPage(false);
      });
  }, [idLocation]);

  return {
    dataProducts,
    dataSubCategory,
    loadingPage,
    loadingProducts,
    getProductsBySubcategory,
    resetDataSubCategory,
  };
};
