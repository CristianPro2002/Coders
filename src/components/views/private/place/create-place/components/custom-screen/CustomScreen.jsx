import { useState, useEffect, useContext } from "react";
import { message } from "antd";
import {
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  FormOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { EditPlaceContext } from "../../../../../../../config/context/EditPlaceContext";
import { useCreatePlace } from "../../../../../../../utils/hooks/useCreatePlace";
import {
  INITIAL_PLACE_CUSTOM,
  INITIAL_PLACE_CUSTOM_EDIT,
} from "../../../../../../../utils/constants/initialFormCustom";
import { MODE_EDIT_FORM } from "../../../../../../../utils/constants/modeForm";
import { CUSTOM_COMPONENT } from "../../../../../../../utils/constants/realtimes/typeComponent";
import { getPlaceCustoms } from "../../../../../../../utils/api/place";
import InputFile from "../../../../../../common/inputs/InputFile";
import LayoutRealtime from "../../../../../../common/realtimes/Layout/LayoutRealtime";
import SkeletonPlaceHome from "../../../../../../ui/loadings/skeleton_places/SkeletonPlaceHome";
import InputText from "../../../../../../common/inputs/InputText";
import TextArea from "../../../../../../common/inputs/Textarea";
import "@/styles/Components/create-place/CustomScreen.css";

export default function CustomScreen() {
  let {
    place,
    placeEdit,
    setPlace,
    setPlaceEdit,
    custom,
    setCustom,
    mode,
    setMode,
    handleChangeCustom,
    handleChangeCustomEdit,
    handleChangeCustomImgs,
    handleChangeCustomImgsEdit,
    locationIdPlace,
    resetSliderImgInCreateCustom1,
    resetSliderImgInEditCustom1,
    handleSubmitCustoms,
    handleSubmitEditCustoms,
    loading,
    setLoading,
    messageApi,
    contextHolder,
  } = useCreatePlace(INITIAL_PLACE_CUSTOM, INITIAL_PLACE_CUSTOM_EDIT);

  const { placeEdit: placeEditComplete, place: placeComplete } =
    useContext(EditPlaceContext);
  let dflt_lang = locationIdPlace
    ? placeEditComplete.dflt_lang
    : placeComplete.dflt_lang;
  let theme = locationIdPlace ? placeEditComplete.theme : placeComplete.theme;

  const [editable, setEditable] = useState(
    mode === MODE_EDIT_FORM ? false : true
  );

  const handleCustom = (e) => {
    setCustom(parseInt(e.target.value));
  };

  useEffect(() => {
    if (locationIdPlace) {
      setLoading(true);
      getPlaceCustoms(locationIdPlace)
        .then((res) => {
          if (Object.keys(res.data.data).length > 0) {
            setMode("edit");
            setPlaceEdit(res.data.data);
            setEditable(false);
          }
          setLoading(false);
        })
        .catch(() => {
          messageApi.error("Error en traer los datos de customs");
          setMode("create");
          setLoading(false);
        });
    }
  }, [locationIdPlace]);

  useEffect(() => {
    setEditable(mode === MODE_EDIT_FORM ? false : true);
  }, [mode]);

  return (
    <section className="customScreen">
      {contextHolder}
      {loading ? (
        <SkeletonPlaceHome />
      ) : (
        <>
          <main className="customScreen-mainCustom">
            <h2>
              Custom Screen{" "}
              {mode === MODE_EDIT_FORM ? (
                <button
                  type="button"
                  onClick={() => setEditable(!editable)}
                  className="customScreen-editable"
                >
                  {editable ? <CloseOutlined /> : <EditOutlined />}
                </button>
              ) : null}
              <select
                onChange={handleCustom}
                value={custom}
                className="customScreen-handleCustom"
              >
                <option value={0}>Custom 1</option>
                <option value={1}>Custom 2</option>
              </select>
            </h2>
            <div className="customScreen-contentForm">
              <label>Title</label>
              <InputText
                width="90%"
                height="43px"
                className="margin-bottomCustom"
                placeholder="Title"
                name="title"
                onChange={
                  mode === MODE_EDIT_FORM
                    ? (e) => handleChangeCustomEdit(e, dflt_lang)
                    : (e) => handleChangeCustom(e, dflt_lang)
                }
                value={
                  mode === MODE_EDIT_FORM
                    ? placeEdit[custom].title[dflt_lang] || ""
                    : place[custom].title[dflt_lang] || ""
                }
                disabled={!editable}
              />
              <label>Text</label>
              <TextArea
                width="90%"
                height="100px"
                className="margin-bottomCustom"
                placeholder="Text"
                name="text"
                onChange={
                  mode === MODE_EDIT_FORM
                    ? (e) => handleChangeCustomEdit(e, dflt_lang)
                    : (e) => handleChangeCustom(e, dflt_lang)
                }
                value={
                  mode === MODE_EDIT_FORM
                    ? placeEdit[custom].text[dflt_lang] || ""
                    : place[custom].text[dflt_lang] || ""
                }
                disabled={!editable}
              />
              <label>Slider imgs</label>
              <div className="customScreen-slider">
                <figure className="customScreen-contentSliderImgs">
                  {place[custom].slider_imgs ||
                  placeEdit[custom].slider_imgs ? (
                    <>
                      {mode === MODE_EDIT_FORM
                        ? placeEdit[custom].slider_imgs.map((item, i) => (
                            <div className="customScreen-sliderImgs" key={i}>
                              {item ? (
                                <button
                                  type="button"
                                  onClick={() => resetSliderImgInEditCustom1(i)}
                                  disabled={!editable}
                                >
                                  X
                                </button>
                              ) : null}
                              <img
                                src={item}
                                alt="slider-img"
                                width="200px"
                                height="180px"
                              />
                            </div>
                          ))
                        : place[custom].slider_imgs.map((item, i) => (
                            <div className="customScreen-sliderImgs" key={i}>
                              {item ? (
                                <button
                                  type="button"
                                  onClick={() =>
                                    resetSliderImgInCreateCustom1(i)
                                  }
                                  disabled={!editable}
                                >
                                  X
                                </button>
                              ) : null}
                              <img
                                src={item}
                                alt="slider-img"
                                width="200px"
                                height="180px"
                              />
                            </div>
                          ))}
                    </>
                  ) : null}
                  <InputFile
                    width="200px"
                    height="180px"
                    onChange={
                      mode === MODE_EDIT_FORM
                        ? handleChangeCustomImgsEdit
                        : handleChangeCustomImgs
                    }
                    name="slider_imgs"
                    disabled={!editable}
                  />
                </figure>
              </div>
            </div>
            <span className="customScreen-buttons">
              <button
                type="button"
                onClick={
                  mode === MODE_EDIT_FORM
                    ? handleSubmitEditCustoms
                    : handleSubmitCustoms
                }
              >
                {mode === MODE_EDIT_FORM ? (
                  <FormOutlined className="customScreen-icon" />
                ) : (
                  <PlusSquareOutlined className="customScreen-icon" />
                )}
                {mode === MODE_EDIT_FORM ? "Editar" : "Create"}
              </button>
              <button>
                <DeleteOutlined className="customScreen-icon" />
                Delete
              </button>
            </span>
          </main>
          <aside className="customScreen-visualizer">
            <h3>Realtime</h3>
            <div className="customScreen-contentComponent">
              {placeEditComplete || placeComplete ? (
                <LayoutRealtime
                  theme={theme}
                  data={locationIdPlace ? placeEditComplete : placeComplete}
                  dataCustom={
                    mode === MODE_EDIT_FORM
                      ? [placeEdit[custom]]
                      : [place[custom]]
                  }
                  typeComponent={CUSTOM_COMPONENT}
                />
              ) : null}
            </div>
          </aside>
        </>
      )}
    </section>
  );
}
