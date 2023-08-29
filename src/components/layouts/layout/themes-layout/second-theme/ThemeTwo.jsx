import styles from "@/styles/Theme/Second-theme/Layout/Layout.module.css";

export default function ThemeTwo({ Outlet, Menu }) {
  return (
    <div className={styles["layout"]}>
      <div
        className={styles["layout-outlet"]}
      >
        <Outlet />
      </div>
      <div className={styles["layout-menu"]}>
        <Menu />
      </div>
    </div>
  );
}
