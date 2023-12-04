import styles from "@/styles/Theme/First-theme/Menu/menu.module.css";

export default function ThemeOne({ dataPlace, stateMenu, LANGUAGE, Link }) {
  return (
    <div className={styles["menu"]}>
      {dataPlace ? (
        <>
          {stateMenu ? (
            <>
              {dataPlace.navbar_menu.map((item, index) => (
                <div className={styles["menu-options"]} key={index}>
                  {index === 0 ? (
                    <Link href="/" className={styles["menu-links"]}>
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
                    <Link href="/" className={styles["menu-links"]}>
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
