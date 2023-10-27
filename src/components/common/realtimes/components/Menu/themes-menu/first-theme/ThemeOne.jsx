import styles from "@/styles/Theme/realtimes/First-theme/Menu/Menu.module.css";

export default function ThemeOne({ dataPlace, stateMenu, LANGUAGE, Link }) {
  return (
    <div className={styles["menu"]}>
      {dataPlace.navbar_web && dataPlace.navbar_menu ? (
        <>
          {stateMenu ? (
            <>
              {dataPlace.navbar_menu.map((item, index) => (
                <div className={styles["menu-options"]} key={index}>
                  {index === 0 ? (
                    <Link to="/" className={styles["menu-links"]}>
                      <img src={item.icon} alt="img icon" />
                    </Link>
                  ) : index === 1 ? (
                    <a
                      href={item.link}
                      className={styles["menu-links"]}
                      target="_blank"
                    >
                      <img src={item.icon} alt="img icon" />
                    </a>
                  ) : null}
                </div>
              ))}
            </>
          ) : (
            <>
              {dataPlace.navbar_web.map((item, index) => (
                <div className={styles["menu-options"]} key={index}>
                  {index === 0 ? (
                    <a
                      href="tel:+573172527140"
                      className={styles["menu-links"]}
                    >
                      <img src={item.icon} alt="img icon" />
                    </a>
                  ) : index === 1 ? (
                    <a
                      href={item.link}
                      className={styles["menu-links"]}
                      target="_blank"
                    >
                      <img src={item.icon} alt="img icon" />
                    </a>
                  ) : index === 2 ? (
                    <Link to="/" className={styles["menu-links"]}>
                      <img src={item.icon} alt="img icon" />
                    </Link>
                  ) : null}
                  {item.title[LANGUAGE]}
                </div>
              ))}
            </>
          )}
        </>
      ) : null}
    </div>
  );
}