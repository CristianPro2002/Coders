import { useState } from "react";
import { ThemeTwoCarIcon } from "../../../../../ui/icons/Icons";
import styles from "@/styles/Theme/Second-theme/Menu/Menu.module.css";

export default function ThemeTwo({ dataPlace, stateMenu, Link }) {
  const [activeMenu, setActiveMenu] = useState(1);
  const [activeWeb, setActiveWeb] = useState(1);

  return (
    <div className={styles["menu"]}>
      {dataPlace ? (
        <>
          {stateMenu ? (
            <>
              {dataPlace.navbar_menu.map((item, index) => (
                <div className={styles["menu-options"]} key={index}>
                  {index === 0 ? (
                    <div
                      className={
                        activeWeb === 1
                          ? `${styles["menu-contentLinks"]} ${styles["active"]}`
                          : `${styles["menu-contentLinks"]}`
                      }
                      onClick={() => setActiveWeb(1)}
                    >
                      <Link to="/" className={styles["menu-links"]}>
                        <img
                          src={item.icon}
                          alt="img icon"
                          className={activeWeb === 1 ? styles["filter"] : ""}
                        />
                      </Link>
                    </div>
                  ) : index === 1 ? (
                    <div
                      className={
                        activeWeb === 2
                          ? `${styles["menu-contentLinks"]} ${styles["active"]}`
                          : `${styles["menu-contentLinks"]}`
                      }
                      onClick={() => setActiveWeb(2)}
                    >
                      <a
                        href={item.link}
                        className={styles["menu-links"]}
                        target="_blank"
                      >
                        <img
                          src={item.icon}
                          alt="img icon"
                          className={activeWeb === 2 ? styles["filter"] : ""}
                        />
                      </a>
                    </div>
                  ) : null}
                </div>
              ))}
            </>
          ) : (
            <>
              {dataPlace.navbar_web.map((item, index) => (
                <div className={styles["menu-options"]} key={index}>
                  {index === 0 ? (
                    <div
                      className={
                        activeMenu === 1
                          ? `${styles["menu-contentLinks"]} ${styles["active"]}`
                          : `${styles["menu-contentLinks"]}`
                      }
                      onClick={() => setActiveMenu(1)}
                    >
                      <a
                        href="tel:+573172527140"
                        className={styles["menu-links"]}
                      >
                        <img
                          src={item.icon}
                          alt="img icon"
                          className={activeMenu === 1 ? styles["filter"] : ""}
                        />
                      </a>
                    </div>
                  ) : index === 1 ? (
                    <div
                      className={
                        activeMenu === 2
                          ? `${styles["menu-contentLinks"]} ${styles["active"]}`
                          : `${styles["menu-contentLinks"]}`
                      }
                      onClick={() => setActiveMenu(2)}
                    >
                      <a
                        href={item.link}
                        className={styles["menu-links"]}
                        target="_blank"
                      >
                        <img
                          src={item.icon}
                          alt="img icon"
                          className={activeMenu === 2 ? styles["filter"] : ""}
                        />
                      </a>
                    </div>
                  ) : index === 2 ? (
                    <div
                      className={
                        activeMenu === 3
                          ? `${styles["menu-contentLinks"]} ${styles["active"]}`
                          : `${styles["menu-contentLinks"]}`
                      }
                      onClick={() => setActiveMenu(3)}
                    >
                      <Link to="/" className={styles["menu-links"]}>
                        <img
                          src={item.icon}
                          alt="img icon"
                          className={activeMenu === 3 ? styles["filter"] : ""}
                        />
                      </Link>
                    </div>
                  ) : null}
                </div>
              ))}
              <div className={styles["menu-options"]}>
                <div
                  className={
                    activeMenu === 4
                      ? `${styles["menu-contentLinks"]} ${styles["active"]}`
                      : `${styles["menu-contentLinks"]}`
                  }
                  onClick={() => setActiveMenu(4)}
                >
                  <Link to="/" className={styles["menu-links"]}>
                    <ThemeTwoCarIcon
                      width="30"
                      height="30"
                      fill={activeMenu === 4 ? "white" : "#222222"}
                    />
                  </Link>
                </div>
              </div>
            </>
          )}
        </>
      ) : null}
    </div>
  );
}
