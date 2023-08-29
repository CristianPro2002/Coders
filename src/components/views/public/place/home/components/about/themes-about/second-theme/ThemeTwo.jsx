import styles from "@/styles/Theme/Second-theme/Home/About.module.css";

export default function ThemeTwo({ about, LANGUAGE }) {
  return (
    <div className={styles["about"]}>
      <h2 className={styles["about-title"]}>{about.title[LANGUAGE]}</h2>
      <div className={styles["about-contentText"]}>
        <p className={styles["about-text"]}>{about.text[LANGUAGE]}</p>
      </div>
    </div>
  );
}
