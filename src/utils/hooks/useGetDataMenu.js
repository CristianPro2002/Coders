import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMenu } from "../api/menu";
import { getCategoriesByMenu } from "../api/category";

export const useGetDataMenu = () => {
  const [dataCategory, setDataCategory] = useState([]);
  const [dataMenu, setDataMenu] = useState({});
  const [loading, setLoading] = useState(true);
  const idMenu = localStorage.getItem("idMenu");
  const navigate = useNavigate();

  /**
   * @description Esta funcion se encarga de redireccionar a la pagina de la categoria seleccionada
   * @param {Number} id Es el id de la categoria
   * @returns {void}
   */
  const handleClick = (id) => {
    navigate(`${id}`);
  };

  useEffect(() => {
    Promise.all([getMenu(idMenu), getCategoriesByMenu(idMenu)])
      .then((res) => {
        setDataMenu(res[0].data);
        setDataCategory(res[1]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idMenu]);

  return {
    dataCategory,
    dataMenu,
    loading,
    handleClick,
  };
};
