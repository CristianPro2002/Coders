import { validationLang } from "@/utils/functions/validation-lang"
import styles from "@/styles/Theme/Second-theme/Home/about.module.css";

export default function SecondThemeAbout({ about, LANGUAGE }) {
  return (
    <div className={styles["about"]}>
      <h2 className={styles["about-title"]}>{validationLang(about.title, LANGUAGE)}</h2>
      {Object.keys(about.text).length > 0 ? (
        <div className={styles["about-contentText"]}>
          <p className={styles["about-text"]}>{validationLang(about.text, LANGUAGE)}</p>
        </div>
      ) : null}
    </div>
  );
}
