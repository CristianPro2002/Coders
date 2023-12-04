"use client";

import { useState } from "react";
import Header from "../common/header/Header";
import Menu from "../common/menu/Menu";
import MenuInteractive from "../common/menu-interactive/menu-interactive";
import styles from "@/styles/Theme/First-theme/Layout/layout.module.css";

export default function ThemeFirstLayout({ children }) {

  const [menuInteractive, setMenuInteractive] = useState(false);

  return (
    <div className={styles["layout"]}>
      <MenuInteractive menuInteractive={menuInteractive} />
      <Header setMenuInteractive={setMenuInteractive} />
      <div
        className={
          menuInteractive
            ? `${styles["layout-outlet"]} ${styles["filter"]}`
            : styles["layout-outlet"]
        }
      >
        {children}
      </div>
      <div
        className={
          menuInteractive
            ? `${styles["layout-menu"]} ${styles["filter"]}`
            : styles["layout-menu"]
        }
      >
        <Menu />
      </div>
    </div>
  );
}
