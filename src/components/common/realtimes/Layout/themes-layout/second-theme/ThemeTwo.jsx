import styles from "@/styles/Theme/realtimes/Second-theme/Layout/Layout.module.css";
import Index from "../../../Home/Index";

export default function ThemeTwo({
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
