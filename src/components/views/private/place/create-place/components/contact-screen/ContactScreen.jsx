import { useState, useContext, useEffect } from "react";
import { TimePicker, message } from "antd";
import dayjs from "dayjs";
import {
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  FormOutlined,
  PlusOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { EditPlaceContext } from "../../../../../../../config/context/EditPlaceContext";
import {
  INITIAL_PLACE_CONTACT_EDIT,
  INITIAL_PLACE_CONTACT,
} from "../../../../../../../utils/constants/initialFormContact";
import { CONTACT_COMPONENT } from "../../../../../../../utils/constants/realtimes/typeComponent";
import { MODE_EDIT_FORM } from "../../../../../../../utils/constants/modeForm";
import { useCreatePlace } from "../../../../../../../utils/hooks/useCreatePlace";
import { getPlaceContact } from "../../../../../../../utils/api/place";
import LayoutRealtime from "../../../../../../common/realtimes/Layout/LayoutRealtime";
import SkeletonPlaceHome from "../../../../../../ui/loadings/skeleton_places/SkeletonPlaceHome";
import InputText from "../../../../../../common/inputs/InputText";
import TextArea from "../../../../../../common/inputs/Textarea";
import InputNumber from "../../../../../../common/inputs/InputNumber";
import InputEmail from "../../../../../../common/inputs/InputEmail";
import "@/styles/Components/create-place/ContactScreen.css";

export default function ContactScreen() {
  let {
    place,
    placeEdit,
    setPlaceEdit,
    mode,
    setMode,
    handleChange,
    handleChangeEdit,
    handleChangeWithLang,
    handleChangeWithLangEdit,
    handleChangeDaysContact,
    handleChangeDaysContactEdit,
    handleChangeHoursContact,
    handleChangeHoursContactEdit,
    handleDeleteDay,
    handleDeleteDayModeEdit,
    handleSubmitContact,
    handleSubmitEditContact,
    locationIdPlace,
    loading,
    setLoading,
    messageApi,
    contextHolder,
  } = useCreatePlace(INITIAL_PLACE_CONTACT, INITIAL_PLACE_CONTACT_EDIT);

  const { placeEdit: placeEditComplete, place: placeComplete } = useContext(EditPlaceContext);
  let dflt_lang = locationIdPlace ? placeEditComplete.dflt_lang : placeComplete.dflt_lang;
  let theme = locationIdPlace ? placeEditComplete.theme : placeComplete.theme;

  const [editable, setEditable] = useState(
    mode === MODE_EDIT_FORM ? false : true
  );
  const [countTime, setCountTime] = useState([0]);

  const handleAddTime = () => {
    if (countTime.length >= 7) {
      messageApi.error("No se puede agregar mas de 7 dias");
      return;
    }
    setCountTime([...countTime, countTime.length]);
  };

  useEffect(() => {
    if (locationIdPlace) {
      setLoading(true);
      getPlaceContact(locationIdPlace)
        .then((res) => {
          if (Object.keys(res.data.data).length > 0) {
            setMode("edit");
            setPlaceEdit(res.data.data);
            setEditable(false);
          }
          setLoading(false);
        })
        .catch(() => {
          messageApi.error("Error en traer los datos del contacto");
          setMode("create");
          setLoading(false);
        });
    }
  }, [locationIdPlace]);

  useEffect(() => {
    if (placeEdit.open_hours[dflt_lang]) {
      setCountTime(placeEdit.open_hours[dflt_lang]);
    }
  }, [placeEdit.open_hours[dflt_lang]]);

  useEffect(() => {
    setEditable(mode === MODE_EDIT_FORM ? false : true);
  }, [mode]);

  return (
    <section className="contactScreen">
      {contextHolder}
      {loading ? (
        <SkeletonPlaceHome />
      ) : (
        <>
          <main className="contactScreen-mainContact">
            <h2>
              Contact Screen{" "}
              {mode === MODE_EDIT_FORM ? (
                <button
                  type="button"
                  onClick={() => setEditable(!editable)}
                  className="contactScreen-editable"
                >
                  {editable ? <CloseOutlined /> : <EditOutlined />}
                </button>
              ) : null}
            </h2>
            <div className="contactScreen-contentForm">
              <label>Address Title</label>
              <InputText
                width="90%"
                height="43px"
                className="margin-bottomContact"
                placeholder="Address Title"
                name="address_title"
                onChange={
                  mode === MODE_EDIT_FORM
                    ? (e) => handleChangeWithLangEdit(e, dflt_lang)
                    : (e) => handleChangeWithLang(e, dflt_lang)
                }
                value={
                  mode === MODE_EDIT_FORM
                    ? placeEdit.address_title[dflt_lang]
                    : null
                }
                disabled={!editable}
              />
              <label>Address</label>
              <InputText
                width="90%"
                height="43px"
                className="margin-bottomContact"
                placeholder="Address"
                name="address"
                onChange={
                  mode === MODE_EDIT_FORM ? handleChangeEdit : handleChange
                }
                value={mode === MODE_EDIT_FORM ? placeEdit.address : null}
                disabled={!editable}
              />
              <label>Open hours title</label>
              <InputText
                width="90%"
                height="43px"
                className="margin-bottomContact"
                placeholder="Open hours title"
                name="open_hours_title"
                onChange={
                  mode === MODE_EDIT_FORM
                    ? (e) => handleChangeWithLangEdit(e, dflt_lang)
                    : (e) => handleChangeWithLang(e, dflt_lang)
                }
                value={
                  mode === MODE_EDIT_FORM
                    ? placeEdit.open_hours_title[dflt_lang]
                    : null
                }
                disabled={!editable}
              />
              <label>Open hours</label>
              {mode === MODE_EDIT_FORM && placeEdit.open_hours[dflt_lang]
                ? countTime.map((item, index) => (
                    <div key={index} className="contactScreen-contentDays">
                      <InputText
                        width="100px"
                        height="43px"
                        placeholder="Open hours"
                        name="open_hours"
                        onChange={(e) =>
                          handleChangeDaysContactEdit(e, index, dflt_lang)
                        }
                        value={
                          placeEdit.open_hours[dflt_lang][index]
                            ? placeEdit.open_hours[dflt_lang][index].day
                            : null
                        }
                        disabled={!editable}
                      />
                      <TimePicker.RangePicker
                        className="contactScreen-rangeHours"
                        use12Hours
                        format="h:mm a"
                        onChange={(time, timeString) =>
                          handleChangeHoursContactEdit(
                            time,
                            timeString,
                            index,
                            dflt_lang
                          )
                        }
                        defaultValue={
                          placeEdit.open_hours[dflt_lang][index]
                            ? [
                                dayjs(
                                  placeEdit.open_hours[dflt_lang][index].hours
                                    ? placeEdit.open_hours[dflt_lang][index]
                                        .hours[0]
                                    : "8:00 am",
                                  "h:mm a"
                                ),
                                dayjs(
                                  placeEdit.open_hours[dflt_lang][index].hours
                                    ? placeEdit.open_hours[dflt_lang][index]
                                        .hours[1]
                                    : "6:00 pm",
                                  "h:mm a"
                                ),
                              ]
                            : null
                        }
                        disabled={!editable}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          handleDeleteDayModeEdit(index, dflt_lang)
                        }
                        disabled={!editable}
                      >
                        <CloseOutlined />
                      </button>
                    </div>
                  ))
                : countTime.map((item, index) => (
                    <div key={index} className="contactScreen-contentDays">
                      <InputText
                        width="100px"
                        height="43px"
                        placeholder="Open hours"
                        name="open_hours"
                        onChange={(e) =>
                          handleChangeDaysContact(e, index, dflt_lang)
                        }
                        value={null}
                        disabled={!editable}
                      />
                      <TimePicker.RangePicker
                        className="contactScreen-rangeHours"
                        use12Hours
                        format="h:mm a"
                        onChange={(time, timeString) =>
                          handleChangeHoursContact(
                            time,
                            timeString,
                            index,
                            dflt_lang
                          )
                        }
                        defaultValue={[
                          dayjs("8:00 am", "h:mm a"),
                          dayjs("6:00 pm", "h:mm a"),
                        ]}
                        disabled={!editable}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          handleDeleteDay(
                            index,
                            dflt_lang,
                            countTime,
                            setCountTime
                          )
                        }
                        disabled={!editable}
                      >
                        <CloseOutlined />
                      </button>
                    </div>
                  ))}
              <button
                type="button"
                className="contactScreen-buttonAddDay margin-bottomContact"
                onClick={handleAddTime}
                disabled={!editable}
              >
                <PlusOutlined />
              </button>
              <label>Title</label>
              <InputText
                width="90%"
                height="43px"
                className="margin-bottomContact"
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
              <label>Text</label>
              <TextArea
                width="90%"
                height="100px"
                className="margin-bottomContact"
                placeholder="Text"
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
              <label>Phone</label>
              <InputNumber
                width="90%"
                height="43px"
                className="margin-bottomContact"
                placeholder="Phone"
                name="phone"
                onChange={
                  mode === MODE_EDIT_FORM ? handleChangeEdit : handleChange
                }
                value={mode === MODE_EDIT_FORM ? placeEdit.phone : null}
                disabled={!editable}
              />
              <label>Email</label>
              <InputEmail
                width="90%"
                height="43px"
                className="margin-bottomContact"
                placeholder="Email"
                name="email"
                onChange={
                  mode === MODE_EDIT_FORM ? handleChangeEdit : handleChange
                }
                value={mode === MODE_EDIT_FORM ? placeEdit.email : null}
                disabled={!editable}
              />
              <label>Whatsapp Link</label>
              <InputText
                width="90%"
                height="43px"
                className="margin-bottomContact"
                placeholder="Whatsapp Link"
                name="whatsapp"
                onChange={
                  mode === MODE_EDIT_FORM ? handleChangeEdit : handleChange
                }
                value={mode === MODE_EDIT_FORM ? placeEdit.whatsapp : null}
                disabled={!editable}
              />
              <label>Facebook Link</label>
              <InputText
                width="90%"
                height="43px"
                className="margin-bottomContact"
                placeholder="Facebook Link"
                name="facebook"
                onChange={
                  mode === MODE_EDIT_FORM ? handleChangeEdit : handleChange
                }
                value={mode === MODE_EDIT_FORM ? placeEdit.facebook : null}
                disabled={!editable}
              />
              <label>Instagram Link</label>
              <InputText
                width="90%"
                height="43px"
                className="margin-bottomContact"
                placeholder="Instagram Link"
                name="instagram"
                onChange={
                  mode === MODE_EDIT_FORM ? handleChangeEdit : handleChange
                }
                value={mode === MODE_EDIT_FORM ? placeEdit.instagram : null}
                disabled={!editable}
              />
              <label>Web Link</label>
              <InputText
                width="90%"
                height="43px"
                className="margin-bottomContact"
                placeholder="Web Link"
                name="web"
                onChange={
                  mode === MODE_EDIT_FORM ? handleChangeEdit : handleChange
                }
                value={mode === MODE_EDIT_FORM ? placeEdit.web : null}
                disabled={!editable}
              />
            </div>
            <span className="contactScreen-buttons">
              <button
                type="button"
                onClick={
                  mode === MODE_EDIT_FORM
                    ? handleSubmitEditContact
                    : handleSubmitContact
                }
              >
                {mode === MODE_EDIT_FORM ? (
                  <FormOutlined className="contactScreen-icon" />
                ) : (
                  <PlusSquareOutlined className="contactScreen-icon" />
                )}
                {mode === MODE_EDIT_FORM ? "Editar" : "Create"}
              </button>
              <button>
                <DeleteOutlined className="contactScreen-icon" />
                Delete
              </button>
            </span>
          </main>
          <aside className="contactScreen-visualizer">
            <h3>Realtime</h3>
            <div className="contactScreen-contentComponent">
              {placeEditComplete || placeComplete ? (
                <LayoutRealtime
                  theme={theme}
                  data={locationIdPlace ? placeEditComplete : placeComplete }
                  dataContact={mode === MODE_EDIT_FORM ? placeEdit : place}
                  typeComponent={CONTACT_COMPONENT}
                />
              ) : null}
            </div>
          </aside>
        </>
      )}
    </section>
  );
}
