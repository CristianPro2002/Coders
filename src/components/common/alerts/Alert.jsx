import { useEffect, useState } from "react";
import { CloseOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { useAlert } from "../../../utils/hooks/useAlert";
import "@/styles/Components/alerts/Alert.css";

const Alert = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { alert, closeAlert } = useAlert();

  useEffect(() => {
    setIsVisible(alert.isOpen);
  }, [alert]);
  return (
    alert.isOpen && (
      <div className={`alert ${isVisible ? "visible" : ""}`}>
        {alert.type === "error" ? (
          <main className="alert-contentData">
            <div className="alert-title">
              <h2>
                {" "}
                <ExclamationCircleOutlined style={{ color: "red" }} />{" "}
                {alert.title.length > 0 ? alert.title : "Error"}
              </h2>
            </div>
            <div className="alert-contentMessage">
              <button onClick={closeAlert} className="alert-buttonClose">
                <CloseOutlined />
              </button>
              <p className="alert-message">{alert.message}</p>
              <button className="alert-buttonRecharge">
                {" "}
                Recargar Pagina{" "}
              </button>
            </div>
          </main>
        ) : (
          <main className="alert-contentData">
            <h2>{alert.type}</h2>
            <div>
              <button onClick={closeAlert} className="alert-buttonClose">
                x
              </button>
              <p>{alert.message}</p>
            </div>
          </main>
        )}
      </div>
    )
  );
};

export default Alert;
