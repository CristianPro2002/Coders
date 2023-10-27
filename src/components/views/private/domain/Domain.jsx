import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { message } from "antd";
import { getPlace } from "../../../../utils/api/place";
import { useAlert } from "../../../../utils/hooks/useAlert";
import { validationError } from "../../../../utils/functions/validation-error";
import FirstAsk from "./components/FirstAsk";
import FirstConfirm from "./components/FirstConfirm";
import SecondAsk from "./components/SecondAsk";
import LoadingRombo from "../../../ui/loadings/loading_rombo/LoadingRombo";
import "./Domain.css";

export default function Domain() {
  let locationIdPlace = useLocation().pathname.split("/")[3];

  const [place, setPlace] = useState({});
  const [page, setPage] = useState(
    localStorage.getItem(locationIdPlace) || "ask1"
  ); // "ask1", "confirm1", "ask2"
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { openAlert } = useAlert();

  const handlePageDomain = (select) => {
    setPage(select);
    localStorage.setItem(locationIdPlace, select);
  };

  useEffect(() => {
    setLoading(true);
    getPlace(locationIdPlace)
      .then((res) => {
        if (res.status === 200) {
          setPlace(res.data.data);
          messageApi.success("Tu lugar es " + res.data.data.name + " 🎉");
        }
        setLoading(false);
      })
      .catch((err) => {
        const { title, message, type } = validationError(err);
        openAlert({
          title,
          message,
          type,
        });
        setLoading(false);
      });
  }, [locationIdPlace]);

  useEffect(() => {
    localStorage.setItem(locationIdPlace, page);
  }, []);
  return (
    <div className="domain">
      {contextHolder}
      {loading ? (
        <LoadingRombo />
      ) : (
        <div>
          <h1>Conecta tu dominio con tu place {place.name}</h1>
          {page === "ask1" && <FirstAsk handlePageDomain={handlePageDomain} />}
          {page === "confirm1" && (
            <FirstConfirm handlePageDomain={handlePageDomain} />
          )}
          {page === "ask2" && <SecondAsk />}
        </div>
      )}
    </div>
  );
}
