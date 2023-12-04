import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMenu } from "@/utils/api/menu";
import { getCategoriesByMenu } from "@/utils/api/category";

export const useGetDataMenu = () => {
  const [dataCategory, setDataCategory] = useState([]);
  const [dataMenu, setDataMenu] = useState({});
  const [loading, setLoading] = useState(true);
  const idMenu =
    typeof window !== "undefined" ? localStorage.getItem("idMenu") : null;
  const router = useRouter();

  /**
   * @description Esta funcion se encarga de redireccionar a la pagina de la categoria seleccionada
   * @param {Number} id Es el id de la categoria
   * @returns {void}
   */
  const handleClick = (id) => {
    router.push(`/categories/${id}`);
  };

  useEffect(() => {
    if (!idMenu) {
      router.push("/");
    } else {
      Promise.all([getMenu(idMenu), getCategoriesByMenu(idMenu)])
        .then((res) => {
          setDataMenu(res[0].data.data);
          setDataCategory(res[1].data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [idMenu]);

  return {
    dataCategory,
    dataMenu,
    loading,
    handleClick,
  };
};
