import { Skeleton, Space } from "antd";
import { skeletonStyles } from "./skeleton_styles"
import "./index.css"

export default function Loading_Home() {

  const { styles } = skeletonStyles();

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
