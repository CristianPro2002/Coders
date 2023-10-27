import {
  HOME_COMPONENT,
  ABOUT_COMPONENT,
  CONTACT_COMPONENT,
  CUSTOM_COMPONENT,
} from "../../../../../../../utils/constants/realtimes/typeComponent";
import styles from "@/styles/Theme/realtimes/Second-theme/Hero/Hero.module.css";

export default function ThemeTwo({ dataPlace, Link, typeComponent }) {
  return (
    <section className={styles.hero}>
      {dataPlace.logo.length > 0 ? (
        <Link to="/">
          <div
            className={
              typeComponent === HOME_COMPONENT ||
              typeComponent === CUSTOM_COMPONENT ||
              typeComponent === ABOUT_COMPONENT ||
              typeComponent === CONTACT_COMPONENT
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
              typeComponent === HOME_COMPONENT ||
              typeComponent === CUSTOM_COMPONENT ||
              typeComponent === ABOUT_COMPONENT ||
              typeComponent === CONTACT_COMPONENT
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
