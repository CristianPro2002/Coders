import styles from "@/styles/Theme/First-theme/Layout/Layout.module.css";

export default function ThemeOne({
  menuInteractive,
  setMenuInteractive,
  MenuInteractive,
  Header,
  Menu,
  Outlet,
}) {
  return (
    <div className={styles["layout"]}>
      <MenuInteractive menuInteractive={menuInteractive} />
      <Header setMenuInteractive={setMenuInteractive} />
      <div
        className={
          menuInteractive ? `${styles["layout-outlet"]} ${styles["filter"]}` : styles["layout-outlet"]
        }
      >
        <Outlet />
      </div>
      <div
        className={
          menuInteractive ? `${styles["layout-menu"]} ${styles["filter"]}` : styles["layout-menu"]
        }
      >
        <Menu />
      </div>
    </div>
  );
}
