import { useEffect, useState } from "react";
import {
  INITIAL_PLACE_HOME,
  INITIAL_PLACE_HOME_EDIT,
} from "@/utils/constants/initialFormHome";
import { useCreatePlace } from "@/utils/hooks/useCreatePlace";
import { getPlace } from "../../../../../utils/api/place";
import { getUserId } from "../../../../../utils/functions/auth-helpers";
import { EditPlaceContext } from "../../../../../config/context/EditPlaceContext";
import { useAlert } from "../../../../../utils/hooks/useAlert";
import { validationError } from "../../../../../utils/functions/validation-error";
import HomeScreen from "./components/home-screen/HomeScreen";
import GeneralScreen from "./components/general-screen/GeneralScreen";
import AboutScreen from "./components/about-screen/AboutScreen";
import ContactScreen from "./components/contact-screen/ContactScreen";
import CustomScreen from "./components/custom-screen/CustomScreen";
import "./CreatePlace.css";

export default function CreatePlace() {
  const {
    place,
    setPlace,
    handleChange,
    handleChangeImg,
    handleChangeOthersLangs,
    handleChangeOthersLangsEdit,
    handleChangeEdit,
    handleChangeImgEdit,
    handleChangeColor,
    handleChangeColorEdit,
    handleSubmit,
    handleSubmitEditHome,
    placeEdit,
    setPlaceEdit,
    mode,
    setMode,
    locationIdPlace,
    loading,
    setLoading,
    contextHolder,
  } = useCreatePlace(INITIAL_PLACE_HOME, INITIAL_PLACE_HOME_EDIT);

  const { openAlert } = useAlert();

  useEffect(() => {
    if (locationIdPlace) {
      setLoading(true);
      getPlace(locationIdPlace)
        .then((res) => {
          if (res.status === 200) {
            setPlaceEdit(res.data.data);
          }
          setLoading(false);
        })
        .catch((err) => {
          let { title, message, type } = validationError(err);
          openAlert({
            title,
            message,
            type,
          });
          setLoading(false);
        });

      setMode("edit");
    }
  }, [locationIdPlace]);

  useEffect(() => {
    setPlace({ ...place, users_id: [getUserId()] });
  }, []);

  return (
    <div className="createPlace">
      <form className="createPlace-formGeneral">
        <EditPlaceContext.Provider value={{ placeEdit, place }}>
          <GeneralScreen
            handleChange={handleChange}
            handleChangeOthersLangs={handleChangeOthersLangs}
            handleChangeOthersLangsEdit={handleChangeOthersLangsEdit}
            handleChangeEdit={handleChangeEdit}
            placeHome={place}
            setPlaceHome={setPlace}
            placeHomeEdit={placeEdit}
            setPlaceHomeEdit={setPlaceEdit}
            mode={mode}
            loading={loading}
            contextHolder={contextHolder}
          />
          <hr />
          <HomeScreen
            handleChange={handleChange}
            handleChangeImg={handleChangeImg}
            handleChangeEdit={handleChangeEdit}
            handleChangeImgEdit={handleChangeImgEdit}
            handleChangeColor={handleChangeColor}
            handleChangeColorEdit={handleChangeColorEdit}
            handleSubmit={handleSubmit}
            handleSubmitEditHome={handleSubmitEditHome}
            placeHome={place}
            setPlaceHome={setPlace}
            placeHomeEdit={placeEdit}
            setPlaceHomeEdit={setPlaceEdit}
            mode={mode}
            loading={loading}
            contextHolder={contextHolder}
          />
          <hr />
          <AboutScreen />
          <hr />
          <ContactScreen />
          <hr />
          <CustomScreen />
          <div>
            <button>Guardar Todo</button>
          </div>
        </EditPlaceContext.Provider>
      </form>
    </div>
  );
}
