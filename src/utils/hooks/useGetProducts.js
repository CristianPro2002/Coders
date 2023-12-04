import { useState, useEffect } from "react";
import { getProductByCategory } from "@/utils/api/category";
import { getProductsBySubCategory } from "@/utils/api/subcategory";
import { usePathname } from "next/navigation";

export const useGetProducts = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [dataSubCategory, setDataSubCategory] = useState([]);
  const [loadingPage, setLoadingPage] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(false);

  const locationId = usePathname().split("/")[2];

  /**
   * @description Esta funcion se encarga de obtener los productos de una subcategoria
   * @param {String} id
   * @returns {void}
   */
  const getProductsBySubcategory = (id) => {
    setLoadingProducts(true);
    getProductsBySubCategory(id)
      .then((res) => {
        setDataSubCategory(res.data.data.products);
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
    if (locationId) {
      const dataProducts = getProductByCategory(locationId);
      dataProducts
        .then((res) => {
          setDataProducts(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoadingPage(false);
        });
    }
  }, [locationId]);

  return {
    dataProducts,
    dataSubCategory,
    loadingPage,
    loadingProducts,
    getProductsBySubcategory,
    resetDataSubCategory,
  };
};
