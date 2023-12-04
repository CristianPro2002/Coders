import { validationLang } from "@/utils/functions/validation-lang";
import styles from "@/styles/Theme/Second-theme/Home/custom.module.css";

export default function SecondThemeCustom({
  custom,
  LANGUAGE,
  sendIdMenu,
  navigateHome,
  Slider,
}) {
  return (
    <div className={styles.custom}>
      {/* <h2 className="custom-title">{custom.title[language]}</h2> */}
      {Object.entries(custom).length ? (
        <article className={styles.custom_contentText}>
          <p className={styles.custom_text}>{validationLang(custom.text, LANGUAGE)}</p>
        </article>
      ) : null}
      {custom.slider_imgs.length ? (
        <div className={styles.custom_carousel}>
          <Slider imgs={custom.slider_imgs} height="200px" width="60%" />
        </div>
      ) : null}
      <div className={styles.custom_btnscrl}>
        <button
          className={styles.custom_btnscrl_link}
          onClick={() => sendIdMenu(custom.menu)}
        >
          View Menú
        </button>
        <button
          className={styles.custom_btnscrl_reserve}
          onClick={navigateHome}
        >
          Reserver
        </button>
      </div>
    </div>
  );
}
