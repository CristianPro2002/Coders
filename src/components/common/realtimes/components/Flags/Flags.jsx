import { Select } from "antd";
import "./flags.css";
import "../sprite-flags/freakflags.css";

export default function Flags() {
  const language = localStorage.getItem("language");

  /**
   * @description Esta función actualiza el idioma por defecto del lugar
   * @param {*} value Es el valor del idioma seleccionado
   * @returns {void}
   */

  return (
    <Select
      defaultValue={language}
      style={{ width: 70, textAlign: "center" }}
      placement="bottomRight"
      size="large"
      bordered={false}
      showArrow={false}
      options={[
        {
          value: "en",
          label: <div className="fflag fflag-US ff-round ff-xl"></div>,
        }, //label de la bandera
        {
          value: "es",
          label: <div className="fflag fflag-ES ff-round ff-xl"></div>,
        },
      ]}
    />
  );
}
