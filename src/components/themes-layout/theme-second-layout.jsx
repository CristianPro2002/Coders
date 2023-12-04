import Menu from "../common/menu/Menu";
import styles from "@/styles/Theme/Second-theme/Layout/layout.module.css";

export default function ThemeSecondLayout({ children }) {
  return (
    <div className={styles["layout"]}>
      <div className={styles["layout-outlet"]}>
        {children}
      </div>
      <div className={styles["layout-menu"]}>
        <Menu />
      </div>
    </div>
  );
}
