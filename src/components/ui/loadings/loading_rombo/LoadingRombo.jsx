import "@/styles/Components/loadings/LoadingRombo.css";

export default function LoadingRombo({ complete = false }) {
  return (
    <>
      {complete ? (
        <div className="loadingRombo-content">
          <span className="loadingRombo"></span>
        </div>
      ) : (
        <div className="loadingRombo-content2">
          <span className="loadingRombo"></span>
        </div>
      )}
    </>
  );
}
