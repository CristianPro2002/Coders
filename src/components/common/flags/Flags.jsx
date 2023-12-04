"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Select } from "antd";
import { updateDefaultLang } from "@/utils/api/place";
import "./flags.css";
import "@/components/ui/sprite-flags/freakflags.css";

export default function Flags() {
  const language = typeof window !== "undefined" ? localStorage.getItem("language") : "es";
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
          localStorage.setItem("language", response.data.data.dflt_lang);
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
      style={{ width: 70, textAlign: "center" }}
      placement="bottomRight"
      size="large"
      onChange={handleChange}
      bordered={false}
      showArrow={false}
      options={
        dataPlace.langs
          ? dataPlace.langs.map((item) => ({
              value: item,
              label: (
                <div className={`fflag fflag-${item} ff-round ff-xl`}></div>
              ),
            }))
          : []
      }
    />
  );
}
