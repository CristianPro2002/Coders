import { useState, useEffect, useContext } from "react";
import { ColorPicker } from "antd";
import {
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  FormOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import {
  INITIAL_PLACE_ABOUT,
  INITIAL_PLACE_ABOUT_EDIT,
} from "../../../../../../../utils/constants/initialFormAbout";
import { MODE_EDIT_FORM } from "../../../../../../../utils/constants/modeForm";
import { BACKGROUND_IMG_NAME, DFLT_LANG_NAME } from "../../../../../../../utils/constants/nameAttribute";
import { ABOUT_COMPONENT } from "../../../../../../../utils/constants/realtimes/typeComponent";
import { useCreatePlace } from "../../../../../../../utils/hooks/useCreatePlace";
import { EditPlaceContext } from "../../../../../../../config/context/EditPlaceContext";
import { getPlaceAbout } from "../../../../../../../utils/api/place";
import SelectGeneral from "../../../../../../common/selects/SelectGeneral";
import InputFile from "../../../../../../common/inputs/InputFile";
import LayoutRealtime from "../../../../../../common/realtimes/Layout/LayoutRealtime";
import SkeletonPlaceHome from "../../../../../../ui/loadings/skeleton_places/SkeletonPlaceHome";
import InputText from "../../../../../../common/inputs/InputText";
import TextArea from "../../../../../../common/inputs/Textarea";
import "@/styles/Components/create-place/AboutScreen.css";

export default function AboutScreen() {
  let {
    place,
    placeEdit,
    setPlace,
    setPlaceEdit,
    mode,
    setMode,
    handleChangeWithLang,
    handleChangeWithLangEdit,
    handleChangeAboutColor,
    handleChangeAboutColorEdit,
    handleChangeAboutImg,
    handleChangeAboutImgEdit,
    handleSubmitAbout,
    handleSubmitEditAbout,
    locationIdPlace,
    loading,
    setLoading,
    messageApi,
    contextHolder,
  } = useCreatePlace(INITIAL_PLACE_ABOUT, INITIAL_PLACE_ABOUT_EDIT);

  const { placeEdit: placeEditComplete, place: placeComplete } = useContext(EditPlaceContext);
  let dflt_lang = locationIdPlace ? placeEditComplete.dflt_lang : placeComplete.dflt_lang;
  let theme = locationIdPlace ? placeEditComplete.theme : placeComplete.theme;

  const [editable, setEditable] = useState(
    mode === MODE_EDIT_FORM ? false : true
  );

  const resetBackgroundImgInCreatePlace = () => {
    setPlace({ ...place, background_img: "" });
  };

  const resetBackgroundImgInEditPlace = () => {
    setPlaceEdit({ ...placeEdit, background_img: "" });
  };

  useEffect(() => {
    if (locationIdPlace) {
      setLoading(true);
      getPlaceAbout(locationIdPlace)
        .then((res) => {
          if (Object.keys(res.data.data).length > 0) {
            setMode("edit");
            setPlaceEdit(res.data.data);
            setEditable(false);
          }
          setLoading(false);
        })
        .catch(() => {
          messageApi.error("Error en traer los datos del about");
          setMode("create");
          setLoading(false);
        });
    }
  }, [locationIdPlace]);

  useEffect(() => {
    setEditable(mode === MODE_EDIT_FORM ? false : true);
  }, [mode]);
  return (
    <section className="aboutScreen">
      {contextHolder}
      {loading ? (
        <SkeletonPlaceHome />
      ) : (
        <>
          <main className="aboutScreen-mainAbout">
            <h2>
              About us Screen{" "}
              {mode === MODE_EDIT_FORM ? (
                <button
                  type="button"
                  onClick={() => setEditable(!editable)}
                  className="aboutScreen-editable"
                >
                  {editable ? <CloseOutlined /> : <EditOutlined />}
                </button>
              ) : null}
            </h2>
            <div className="aboutScreen-contentForm">
              <label>Title</label>
              <InputText
                width="90%"
                height="43px"
                className="margin-bottomAbout"
                placeholder="Title"
                name="title"
                onChange={
                  mode === MODE_EDIT_FORM
                    ? (e) => handleChangeWithLangEdit(e, dflt_lang)
                    : (e) => handleChangeWithLang(e, dflt_lang)
                }
                value={
                  mode === MODE_EDIT_FORM ? placeEdit.title[dflt_lang] : null
                }
                disabled={!editable}
              />
              <label>About us</label>
              <TextArea
                width="90%"
                height="100px"
                className="margin-bottomAbout"
                placeholder="About us"
                name="text"
                onChange={
                  mode === MODE_EDIT_FORM
                    ? (e) => handleChangeWithLangEdit(e, dflt_lang)
                    : (e) => handleChangeWithLang(e, dflt_lang)
                }
                value={
                  mode === MODE_EDIT_FORM ? placeEdit.text[dflt_lang] : null
                }
                disabled={!editable}
              />
              <label>Background</label>
              <div className="aboutScreen-devices">
                <div className="aboutScreen-devices-mobile">
                  <label htmlFor="bgImgMobile">Mobile version</label>
                  {place.background_img || placeEdit.background_img ? (
                    <figure className="aboutScreen-figureLogo">
                      {mode ? (
                        <button
                          type="button"
                          onClick={
                            mode === MODE_EDIT_FORM
                              ? resetBackgroundImgInEditPlace
                              : resetBackgroundImgInCreatePlace
                          }
                          disabled={!editable}
                        >
                          X
                        </button>
                      ) : null}
                      <img
                        src={
                          mode === MODE_EDIT_FORM
                            ? placeEdit.background_img
                            : place.background_img
                        }
                        alt="background-img"
                        width="90px"
                        height="200px"
                      />
                    </figure>
                  ) : (
                    <InputFile
                      width="100px"
                      height="200px"
                      onChange={
                        mode === MODE_EDIT_FORM
                          ? handleChangeAboutImgEdit
                          : handleChangeAboutImg
                      }
                      name={BACKGROUND_IMG_NAME}
                      id="bgImgMobile"
                      disabled={!editable}
                    />
                  )}
                </div>
                <div className="aboutScreen-devices-desktop">
                  <label htmlFor="bgImgDesktop">Color version</label>
                  <div>
                    <ColorPicker
                      onChange={
                        mode === MODE_EDIT_FORM
                          ? handleChangeAboutColorEdit
                          : handleChangeAboutColor
                      }
                      value={
                        mode === MODE_EDIT_FORM
                          ? placeEdit.background_color
                          : place.background_color
                      }
                      disabled={!editable}
                    />
                    <div
                      style={{
                        width: "80px",
                        height: "150px",
                        borderRadius: "10px",
                        backgroundColor: place.background_color,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <span className="aboutScreen-buttons">
              <button
                type="button"
                onClick={
                  mode === MODE_EDIT_FORM
                    ? handleSubmitEditAbout
                    : handleSubmitAbout
                }
              >
                {mode === MODE_EDIT_FORM ? (
                  <FormOutlined className="aboutScreen-icon" />
                ) : (
                  <PlusSquareOutlined className="aboutScreen-icon" />
                )}
                {mode === MODE_EDIT_FORM ? "Editar" : "Create"}
              </button>
              <button>
                <DeleteOutlined className="aboutScreen-icon" />
                Delete
              </button>
            </span>
          </main>
          <aside className="aboutScreen-visualizer">
            <h3>Realtime</h3>
            <div className="aboutScreen-contentComponent">
              {placeEditComplete || placeComplete ? (
                <LayoutRealtime
                  theme={theme}
                  data={locationIdPlace ? placeEditComplete : placeComplete}
                  dataAbout={mode === MODE_EDIT_FORM ? placeEdit : place}
                  typeComponent={ABOUT_COMPONENT}
                />
              ) : null}
            </div>
          </aside>
        </>
      )}
    </section>
  );
}
