import { NavLink, Outlet } from "react-router-dom";
import Logo from "../../../assets/images/LogoMiGusto.png";
import Alert from "../../common/alerts/Alert";
import "@/styles/Layout/Layout.css";

export default function Layout() {
  return (
    <div>
      <Alert />
      <nav className="layout-nav">
        <NavLink to="/" className="layout-buttonLogo">
          <img src={Logo} alt="logo" width={70} className="layout-logo" />
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
