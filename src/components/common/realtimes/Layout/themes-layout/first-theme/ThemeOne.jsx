import styles from "@/styles/Theme/realtimes/First-theme/Layout/Layout.module.css";
import Index from "../../../Home/Index";

export default function ThemeOne({
  MenuInteractive,
  Header,
  Menu,
  data,
  dataAbout,
  dataContact,
  dataCustom,
  typeComponent,
  theme,
}) {
  return (
    <div className={styles["layout"]}>
      <MenuInteractive />
      <Header />
      <div className={styles["layout-outlet"]}>
        <Index
          data={data}
          dataAbout={dataAbout}
          dataContact={dataContact}
          dataCustom={dataCustom}
          typeComponent={typeComponent}
          theme={theme}
        />
      </div>
      <div className={styles["layout-menu"]}>
        <Menu data={data} theme={theme} />
      </div>
    </div>
  );
}
