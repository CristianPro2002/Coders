import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Select } from "antd";
import { updateDefaultLang } from "../../../utils/api/place";
import "./flags.css";

export default function Flags() {
  const language = localStorage.getItem("language");
  const dataPlace = useSelector((state) => state.place);
  const [lang, setLang] = useState(language);

  /**
   * @description Esta función actualiza el idioma por defecto del lugar
   * @param {*} value Es el valor del idioma seleccionado
   * @returns {void}
   */
  const handleChange = (value) => {
    setLang(value);
  };

  useEffect(() => {
    if (!dataPlace) return;
    if (dataPlace.dflt_lang != lang) {
      updateDefaultLang(dataPlace._id, lang)
        .then((response) => {
          localStorage.setItem("language", response.data.dflt_lang);
            window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [lang, dataPlace]);

  return (
    <Select
      defaultValue={language}
      style={{ width: 60, textAlign: "center" }}
      placement="bottomRight"
      size="large"
      onChange={handleChange}
      bordered={false}
      showArrow={false}
      options={[
        {
          value: "en",
          label: (
            <img
              src="https://app-menu.s3.eu-north-1.amazonaws.com/226-united-states.svg"
              width="30px"
            />
          ),
        }, //label de la bandera
        {
          value: "es",
          label: (
            <img
              src="https://app-menu.s3.eu-north-1.amazonaws.com/128-spain.svg"
              width="30px"
            />
          ),
        },
      ]}
    />
  );
}
