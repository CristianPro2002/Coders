import Flags from "@/components/common/flags/Flags";
import { ArrowSimpleIcon } from "@/components/ui/icons/Icons";
import "./menu-interactive.css";

export default function MenuInteractive({ menuInteractive }) {
  return (
    <div
      className={
        menuInteractive
          ? "menuinteractive"
          : "menuinteractive hidden-menuinteractive"
      }
    >
      <div className="menuInteractive-contentText">
        <p className="menuInteractive-text">Inicio</p>
      </div>
      <div className="menuInteractive-contentText">
        <p className="menuInteractive-text">Carrito</p>
        <img
          src="https://app-menu.s3.eu-north-1.amazonaws.com/Theme1/carro-de-compras-rapido+1+(2).svg"
          alt="car shop"
          width="30px"
        />
        <ArrowSimpleIcon />
      </div>
      <div className="menuInteractive-contentText">
        <p className="menuInteractive-text">Idioma</p>
        <Flags />
        <ArrowSimpleIcon />
      </div>
    </div>
  );
}
