import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePlace, getPlacesByUser } from "../api/place";
import { addPlaces } from "../../config/redux/slices/slicePlaces";
import { getUserId } from "../functions/auth-helpers";
import { validationError } from "../functions/validation-error";
import { useAlert } from "./useAlert";
import { useCustomAlerts } from "./useCustomAlerts";

export const useGetPlacesByUser = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const { openAlert } = useAlert();
  const { messageApi, contextHolder, alertSuccess, alertLoading } =
    useCustomAlerts();
  let user = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let userId = getUserId();

  /**
   * @description Elimina un lugar por su id
   * @param {String} id
   * @returns {void}
   */
  const deletePlaceById = (id) => {
    alertLoading("Deleting place...");
    deletePlace(id)
      .then((res) => {
        if (res.status === 200 || res.data.error === false) {
          let newPlaces = places.filter((place) => place._id !== id);
          setPlaces(newPlaces);
          alertSuccess("Place deleted successfully");
        }
      })
      .catch((err) => {
        const { title, message, type } = validationError(err);
        openAlert({ title, message, type: type });
      });
  };

  useEffect(() => {
    setLoading(true);
    if (user._id || userId) {
      /**
       * @description Obtiene los lugares por usuario
       * @param {String} user._id
       * @param {String} userId
       * @returns {void}
       */
      getPlacesByUser(user._id || userId)
        .then((res) => {
          setPlaces(res.data.data);
          dispatch(addPlaces(res.data.data));
          setLoading(false);
        })
        .catch((err) => {
          const { title, message, type } = validationError(err);
          openAlert({ title, message, type });
          setLoading(false);
        });
    }

    return () => {
      setLoading(false);
    };
  }, [user._id, userId]);

  return {
    places,
    user,
    loading,
    deletePlaceById,
    contextHolder,
  };
};
