import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppstoreOutlined, MenuOutlined } from "@ant-design/icons";
import {
  getRefreshToken,
  getUserId,
  removeRefreshToken,
  removeToken,
  removeUserId,
} from "../../../utils/functions/auth-helpers";
import { PATHSPROJECT } from "../../../utils/constants/pathsProject";
import { getUser, logoutUser } from "../../../utils/api/user";
import { getAccount } from "../../../utils/api/account";
import { addUser } from "../../../config/redux/slices/sliceUser";
import { INITIAL_STATE_USER_REDUX } from "../../../utils/constants/initialReduxUser";
import Alert from "../../common/alerts/Alert";
import Logo from "../../../assets/images/LogoMiGusto.png";
import { tokenValidation } from "../../../utils/interceptors/token-validation";
import { validationError } from "../../../utils/functions/validation-error";
import { useAlert } from "../../../utils/hooks/useAlert";
import "@/styles/Layout/LayoutAdmin.css";

export default function LayoutAdmin({ setIsLoggedIn }) {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);
  const { openAlert } = useAlert();
  let { dashboard, products, categories, subcategories } = PATHSPROJECT;

  const handleLogout = () => {
    logoutUser(getRefreshToken())
      .then((res) => {
        console.log(res);
        setIsLoggedIn(false);
        removeRefreshToken();
        removeToken();
        removeUserId();
        dispatch(addUser(INITIAL_STATE_USER_REDUX));
      })
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
        removeRefreshToken();
        removeToken();
        removeUserId();
        dispatch(addUser(INITIAL_STATE_USER_REDUX));
      });
  };

  const getAccountById = (accountId) => {
    getAccount(accountId).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    const id = getUserId();

    if (id) {
      getUser(id)
        .then((res) => {
          if (res.data.error === false && res.data.data) {
            dispatch(addUser(res.data.data));
            getAccountById(res.data.data.account_id);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    tokenValidation()
      .then((res) => {
        if (!res) {
          handleLogout();
        }
      })
      .catch((err) => {
        let { title, message, type } = validationError(err);
        openAlert({
          title,
          message,
          type,
        });
        handleLogout();
      });
  }, []);

  return (
    <div className="layoutAdmin">
      <Alert />
      <nav
        className={
          activeSidebar ? `layoutAdmin-nav activeSidebarNav` : `layoutAdmin-nav`
        }
      >
        <NavLink to={dashboard}>Dashboard</NavLink>
        <NavLink to={products}>Products</NavLink>
        <NavLink to={categories}>Categories</NavLink>
        <NavLink to={subcategories}>Subcategories</NavLink>
        <div className="layoutAdmin-contentPerfil">
          <section
            className={
              activeMenu
                ? "layoutAdmin-menuNav activeMenu"
                : "layoutAdmin-menuNav"
            }
          >
            <span>
              <button className="specialButton">{user.username}</button>
            </span>
            <span>
              <button>Account options</button>
            </span>
            <span>
              <button>Edit profile</button>
            </span>
            <span>
              <button onClick={handleLogout}>Logout</button>
            </span>
          </section>
          <button
            onClick={() => setActiveMenu(!activeMenu)}
            className={
              activeMenu
                ? `layoutAdmin-buttonUser activePerfil`
                : `layoutAdmin-buttonUser`
            }
          >
            <span className="userActive"></span>
            <img
              src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-No-Background.png"
              alt="logo user"
            />
          </button>
        </div>
      </nav>
      <aside
        className={
          activeSidebar
            ? "layoutAdmin-sidebar activeSidebar"
            : "layoutAdmin-sidebar"
        }
      >
        <div className="layoutAdmin-sidebarOptions">
          <img
            src={Logo}
            alt="logo"
            className={
              activeSidebar
                ? `layoutAdmin-sidebarLogo activeLogo`
                : `layoutAdmin-sidebarLogo`
            }
          />
          <button
            className="layoutAdmin-buttonSidebar"
            onClick={() => setActiveSidebar(!activeSidebar)}
          >
            <MenuOutlined className="layoutAdmin-iconMenu" />
          </button>
          <div className="layoutAdmin-contentOptionMenu">
            <AppstoreOutlined className="layoutAdmin-iconOptionMenu" />
            {activeSidebar ? <p>Menú</p> : null}
          </div>
        </div>
      </aside>
      <main
        className={
          activeSidebar ? `layoutAdmin-main activeSidebar` : `layoutAdmin-main`
        }
      >
        <Outlet />
      </main>
    </div>
  );
}
