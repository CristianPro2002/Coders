import { useEffect } from "react";
import styles from "./ThemeTwo.module.css";

export default function ThemeTwo({
  dataCategory,
  dataMenu,
  Link,
  ArrowIcon,
  Hero,
  LANGUAGE,
  handleClick,
  Slider,
}) {
  useEffect(() => {
    let items = document.getElementsByName("categories-itembackground");
    items.forEach((item, index) => {
      item.style.backgroundImage = `url('${dataCategory.data[index].image}')`;
    });
  }, [dataCategory]);

  return (
    <div className={styles["categories"]}>
      <div className={styles["categories-general"]}>
        <div className={styles["categories-arrow"]}>
          <Link to="/">
            <ArrowIcon />
          </Link>
        </div>
        <Hero />
        {dataCategory.data ? (
          <section className={styles["categories-items"]}>
            {dataCategory.data.map((item, index) => (
              <article key={index} className={styles["categories-item"]}>
                <div
                  onClick={() => handleClick(item._id)}
                  className={styles["categories-itembackground"]}
                  name="categories-itembackground"
                ></div>
                <div className={styles["categories-itemText"]}>
                  <h2>{item.name[LANGUAGE]}</h2>
                </div>
              </article>
            ))}
          </section>
        ) : null}
        {dataMenu.slider_imgs ? (
          <div className={styles["categories-recommended"]}>
            <h2>Recommended</h2>
            <div className={styles["categories-carousel"]}>
              <Slider imgs={dataMenu.slider_imgs} height="200px" width="60%" />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
