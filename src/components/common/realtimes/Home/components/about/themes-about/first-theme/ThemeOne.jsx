import styles from "@/styles/Theme/realtimes/First-theme/Home/About.module.css";

export default function ThemeOne({ about, data }) {
  const LANGUAGE = data.dflt_lang;
  return (
    <div className={styles["about"]}>
      <h2 className={styles["about-title"]}>{about.title[LANGUAGE]}</h2>
      {Object.keys(about.text).length > 0 ? (
        <div className={styles["about-contentText"]}>
          <p className={styles["about-text"]}>{about.text[LANGUAGE]}</p>
        </div>
      ) : null}
    </div>
  );
}
