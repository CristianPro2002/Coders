import { Skeleton, Space } from "antd";
import { loadingHome } from "@/styles/Components/Loadings/loadingHome";

export default function Loading_Home() {

  const { styles } = loadingHome();

  return (
    <Space direction="vertical" style={styles.styleSpace}>
    <center style={{ display: "flex", flexDirection: "column" }}>
      <Skeleton.Input active style={{ padding: "10px" }} />
    </center>
    <center style={{ display: "flex", flexDirection: "column" }}>
      <Skeleton.Image active style={{ padding: "10px" }} />
    </center>
  </Space>
  )
}
