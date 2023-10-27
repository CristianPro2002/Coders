import menu_interactive from "@/assets/images/header_menu/menu_interactive.png";
import "./header.css";

export default function Header({setMenuInteractive}) {

  const handleMenuInteractive = () => {
    setMenuInteractive((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="header-carshop"  onClick={handleMenuInteractive}>
        <button className="header-carshop-button">
          <img
            src={menu_interactive}
            alt="carrito de compras"
          />
        </button>
      </div>
    </div>
  );
}
