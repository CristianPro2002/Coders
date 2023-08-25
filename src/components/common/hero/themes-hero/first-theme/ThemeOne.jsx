import styles from "./ThemeOne.module.css";

export default function ThemeOne({ dataPlace, Link, location }) {
  return (
    <section className={styles.hero}>
      {dataPlace.logo.length > 0 ? (
        <Link to="/">
          <div
            className={
              location === "/"
                ? `${styles.hero_logo} ${styles.left}`
                : `${styles.hero_logo} ${styles.padding}`
            }
          >
            <img
              src={dataPlace.logo}
              alt="logo"
              className={styles.hero_logo_img}
            />
          </div>
        </Link>
      ) : (
        <Link to="/">
          <h2
            className={
              location === "/"
                ? styles.hero_title
                : `${styles.hero_title} ${styles.padding_center}`
            }
          >
            {dataPlace.name}
          </h2>
        </Link>
      )}
    </section>
  );
}
