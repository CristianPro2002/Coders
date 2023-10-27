import { useState, useEffect } from "react";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import { MODE_EDIT_FORM } from "../../../../../../../utils/constants/modeForm";
import {
  DFLT_LANG_NAME,
  OTHERS_LANGS_NAME,
  THEME_NAME,
  TYPE_PLACE_NAME,
} from "../../../../../../../utils/constants/nameAttribute";
import SkeletonPlaceGeneral from "../../../../../../ui/loadings/skeleton_places/SkeletonPlaceGeneral";
import InputText from "../../../../../../common/inputs/InputText";
import "@/styles/Components/create-place/GeneralScreen.css";
import SelectGeneral from "../../../../../../common/selects/SelectGeneral";

export default function GeneralScreen({
  handleChange,
  handleChangeOthersLangs,
  handleChangeOthersLangsEdit,
  handleChangeEdit,
  placeHome,
  setPlaceHome,
  placeHomeEdit,
  setPlaceHomeEdit,
  mode,
  loading,
  contextHolder,
}) {
  const [editable, setEditable] = useState(
    mode === MODE_EDIT_FORM ? false : true
  );

  const iconsTheme = (e, lang) => {
    let navbar_web = [];
    let navbar_menu = [];
    if (e.target.value === "theme1") {
      navbar_web = [
        {
          title: {
            [lang]: "Teléfono",
          },
          icon: "https://app-menu.s3.eu-north-1.amazonaws.com/Theme1/voltear-el-telefono+1.svg",
          link: "tel:+34666666666",
        },
        {
          title: {
            [lang]: "Ubicación",
          },
          icon: "https://app-menu.s3.eu-north-1.amazonaws.com/Theme1/marcador+1.svg",
          link: "https://goo.gl/maps/9rPZ2jZ2i8q",
        },
        {
          title: {
            [lang]: "Reserva",
          },
          icon: "https://app-menu.s3.eu-north-1.amazonaws.com/Theme1/reloj-tres+1.svg",
          link: "https://www.google.com",
        },
      ];

      navbar_menu = [
        {
          icon: "https://app-menu.s3.eu-north-1.amazonaws.com/Theme1/hogar+(1).png",
          link: "https://www.google.com",
        },
        {
          icon: "https://app-menu.s3.eu-north-1.amazonaws.com/Theme1/cuota.png",
          link: "https://www.google.com",
        },
      ];
    } else if (e.target.value === "theme2") {
      navbar_web = [
        {
          title: {
            [lang]: "Teléfono",
          },
          icon: "https://app-menu.s3.eu-north-1.amazonaws.com/Theme2/PhoneIcon_theme_2.svg",
          link: "tel:+34666666666",
        },
        {
          title: {
            [lang]: "Ubicación",
          },
          icon: "https://app-menu.s3.eu-north-1.amazonaws.com/Theme2/MapIcon_theme_2.svg",
          link: "https://goo.gl/maps/9rPZ2jZ2i8q",
        },
        {
          title: {
            [lang]: "Reserva",
          },
          icon: "https://app-menu.s3.eu-north-1.amazonaws.com/Theme2/ReserveIcon_theme_2.svg",
          link: "https://www.google.com",
        },
      ];

      navbar_menu = [
        {
          icon: "https://app-menu.s3.eu-north-1.amazonaws.com/Theme1/hogar+(1).png",
          link: "https://www.google.com",
        },
        {
          icon: "https://app-menu.s3.eu-north-1.amazonaws.com/Theme1/cuota.png",
          link: "https://www.google.com",
        },
      ];
    }

    return { navbar_web, navbar_menu };
  };

  const handleTheme = (e) => {
    const { navbar_web, navbar_menu } = iconsTheme(e, placeHome.dflt_lang);
    setPlaceHome({
      ...placeHome,
      [e.target.name]: e.target.value,
      navbar_web,
      navbar_menu,
    });
  };

  const handleThemeEdit = (e) => {
    const { navbar_web, navbar_menu } = iconsTheme(e, placeHomeEdit.dflt_lang);
    setPlaceHomeEdit({
      ...placeHomeEdit,
      [e.target.name]: e.target.value,
      navbar_web,
      navbar_menu,
    });
  };

  useEffect(() => {
    setEditable(mode === MODE_EDIT_FORM ? false : true);
  }, [mode]);

  return (
    <>
      {loading ? (
        <SkeletonPlaceGeneral />
      ) : (
        <section className="generalScreen-sectionLanguage">
          <h3>
            Place
            {mode === MODE_EDIT_FORM ? (
              <button
                type="button"
                onClick={() => setEditable(!editable)}
                className="generalScreen-editable"
              >
                {editable ? <CloseOutlined /> : <EditOutlined />}
              </button>
            ) : null}
          </h3>
          <label htmlFor="aditional-language">Lenguage/s</label>
          <div className="generalScreen-contentAddLanguage">
            {mode === MODE_EDIT_FORM
              ? placeHomeEdit.langs.length
                ? placeHomeEdit.langs.map((lang, i) => (
                    <InputText
                      key={i}
                      width="220px"
                      height="40px"
                      value={lang}
                      disabled={!editable}
                    />
                  ))
                : null
              : placeHome.langs.length
              ? placeHome.langs.map((lang, i) => (
                  <InputText
                    key={i}
                    width="220px"
                    height="40px"
                    value={lang}
                    disabled={!editable}
                  />
                ))
              : null}
            <SelectGeneral
              width="220px"
              height="40px"
              id="aditional-language"
              onChange={
                mode === MODE_EDIT_FORM
                  ? handleChangeOthersLangsEdit
                  : handleChangeOthersLangs
              }
              name="langs"
              disabled={!editable}
            >
              <option selected> Add Language +</option>
              <option value="es">Spanish</option>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
              <option value="gb">Portuguese</option>
            </SelectGeneral>
          </div>
          <label htmlFor="default-language">Default lenguage</label>
          <SelectGeneral
            width="220px"
            height="40px"
            id="default-language"
            onChange={mode === MODE_EDIT_FORM ? handleChangeEdit : handleChange}
            name={DFLT_LANG_NAME}
            value={mode === MODE_EDIT_FORM ? placeHomeEdit.dflt_lang : null}
            disabled={!editable}
          >
            {mode === MODE_EDIT_FORM ? (
              placeHomeEdit.langs.map((lang, i) => (
                <option key={i} value={lang}>
                  {lang}
                </option>
              ))
            ) : placeHome.langs.length ? (
              placeHome.langs.map((lang, i) => (
                <option key={i} value={lang}>
                  {lang}
                </option>
              ))
            ) : (
              <option selected disabled>
                Please add a language
              </option>
            )}
          </SelectGeneral>
          <div className="generalScreen-contentGeneralData">
            <label>Type of place</label>
            <InputText
              width="50%"
              height="40px"
              placeholder="Type of place"
              className="margin-bottomGeneral"
              name={TYPE_PLACE_NAME}
              onChange={
                mode === MODE_EDIT_FORM ? handleChangeEdit : handleChange
              }
              value={
                mode === MODE_EDIT_FORM ? placeHomeEdit.type : placeHome.type
              }
              disabled={!editable}
            />
            <label>Theme</label>
            <SelectGeneral
              width="220px"
              height="40px"
              name={THEME_NAME}
              onChange={mode === MODE_EDIT_FORM ? handleThemeEdit : handleTheme}
              value={mode === MODE_EDIT_FORM ? placeHomeEdit.theme : null}
              disabled={!editable}
            >
              <option selected disabled>
                Select a theme
              </option>
              <option value="theme1">Theme 1</option>
              <option value="theme2">Theme 2</option>
            </SelectGeneral>
          </div>
        </section>
      )}
    </>
  );
}
