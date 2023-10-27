import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProductsByAccount } from "../api/product";
import { useAlert } from "./useAlert";
import { validationError } from "../functions/validation-error";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector((state) => state.user);
  const { openAlert } = useAlert();
  useEffect(() => {
    if (user.account_id) {
      getProductsByAccount(user.account_id)
        .then((res) => {
          if (res.data.error === false && res.data.data) {
            setProducts(res.data.data);
          } else {
            setProducts([]);
            openAlert({
              message: res.data.message,
              type: "error",
            });
          }
        })
        .catch((err) => {
          setProducts([]);
          let { title, message, type } = validationError(err);
          openAlert({
            title,
            message,
            type,
          });
        });
    }
  }, [user.account_id]);

  return {
    products,
  };
};
