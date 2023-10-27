import "@/styles/components/domain/FirstAsk.css";

export default function FirstAsk({ handlePageDomain }) {
  return (
    <div>
      <h3 className="firstAsk-titleAsk">
        Sabes comprar tu dominio o ya tienes uno disponible?{" "}
      </h3>
      <div className="firstAsk-buttonsFirstAsk">
        <button
          className="firstAsk-buttonConfirm"
          onClick={() => handlePageDomain("confirm1")}
        >
          Si
        </button>
        <button
          className="firstAsk-buttonCancel"
          onClick={() => handlePageDomain("ask2")}
        >
          No
        </button>
      </div>
    </div>
  );
}
