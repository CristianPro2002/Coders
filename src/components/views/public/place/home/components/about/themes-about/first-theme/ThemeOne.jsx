import styles from "./ThemeOne.module.css";

export default function ThemeOne({ about, LANGUAGE }) {
  return (
    <div className={styles["about"]}>
      <h2 className={styles["about-title"]}>{about.title[LANGUAGE]}</h2>
      <div className={styles["about-contentText"]}>
        <p className={styles["about-text"]}>{about.text[LANGUAGE]}</p>
      </div>
    </div>
  );
}
