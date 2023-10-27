import { useState } from "react";
import { getVerifySupplierDomain } from "../../../../../utils/api/dominio";
import { useAlert } from "../../../../../utils/hooks/useAlert";
import { validationError } from "../../../../../utils/functions/validation-error";
import { ArrowLeftOutlined } from "@ant-design/icons";
import LoadingRombo from "../../../../ui/loadings/loading_rombo/LoadingRombo";
import "@/styles/components/domain/FirstConfirm.css";

export default function FirstConfirm({ handlePageDomain }) {
  const [supplier, setSupplier] = useState({
    registered: false,
    name: "",
    url: "",
    status: 0,
  });
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const { openAlert } = useAlert();

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    getVerifySupplierDomain(domain)
      .then((res) => {
        console.log(res);
        setSupplier({
          registered: res.data.registered,
          name: res.data.registrar ? res.data.registrar.name : "",
          url: res.data.registrar ? res.data.registrar.url : "",
          status: res.status,
        });
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
  };
  return (
    <div className="firstConfirm">
      <button
        className="domain-buttonBack"
        onClick={() => handlePageDomain("ask1")}
      >
        <ArrowLeftOutlined className="domain-iconBack" />
      </button>
      <span className="firstConfirm-title">Primero Validemos tu dominio</span>
      <form onSubmit={handleSubmit} className="firstConfirm-form">
        <div className="firstConfirm-DomainValid">
          <input
            type="text"
            placeholder="example.com"
            onChange={(e) => setDomain(e.target.value)}
            value={domain}
          />
          <button>Validar</button>
        </div>
      </form>
      {loading ? (
        <LoadingRombo />
      ) : (
        <>
          {supplier.status === 200 && (
            <section className="firstConfirm-contentData">
              {supplier.registered ? (
                <div>
                  <p>
                    el dominio pertenece a: <span>{supplier.name}</span>
                  </p>
                  {supplier.url && (
                    <p>
                      la url es: <span>{supplier.url}</span>
                    </p>
                  )}
                  <p>este dominio esta registrado</p>
                  <span>
                    !Este dominio es valido, por favor presiona continuar¡
                  </span>
                  <button className="firstConfirm-buttonContinue">
                    Continuar
                  </button>
                </div>
              ) : (
                <>
                  <p>el dominio no esta registrado</p>
                </>
              )}
            </section>
          )}
        </>
      )}
    </div>
  );
}
