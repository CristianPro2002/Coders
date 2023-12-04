import { validationLang } from "@/utils/functions/validation-lang";
import styles from "@/styles/Theme/First-theme/Home/custom.module.css";

export default function FirstThemeCustom({
  custom,
  LANGUAGE,
  sendIdMenu,
  navigateHome,
  Slider,
}) {
  return (
    <div className={styles["custom"]}>
      {/* <h2 className="custom-title">{custom.title[language]}</h2> */}
      {Object.entries(custom).length ? (
        <article className={styles["custom-contentText"]}>
          <p className={styles["custom-text"]}>{validationLang(custom.text, LANGUAGE)}</p>
        </article>
      ) : null}
      {custom.slider_imgs.length ? (
        <div className={styles["custom-carousel"]}>
          <Slider imgs={custom.slider_imgs} height="200px" />
        </div>
      ) : null}
      <div className={styles["custom-btnscrl"]}>
        <button
          className={styles["custom-btnscrl-link"]}
          onClick={() => sendIdMenu(custom.menu)}
        >
          View Menu
        </button>
        <button
          className={styles["custom-btnscrl-reserve"]}
          onClick={navigateHome}
        >
          Resever your table
        </button>
      </div>
    </div>
  );
}
