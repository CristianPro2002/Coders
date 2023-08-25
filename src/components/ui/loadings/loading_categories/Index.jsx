import { Skeleton, Space } from "antd";
import { skeletonStyles } from "./skeleton_styles";
import "./index.css";

export default function Loading_Categories() {
  const { styles } = skeletonStyles();

  return (
    <Space direction="vertical" style={styles.styleSpace}>
      <center style={{ display: "flex", flexDirection: "column" }}>
        <Skeleton.Image active style={{ padding: "10px" }} />
      </center>
      <Skeleton.Avatar
        active
        shape="square"
        className="categoires-skeleton-avatar"
        style={styles.styleCard}
      />
      <div style={{ paddingTop: "30px" }}>
        <Skeleton.Input active />
      </div>
      <Skeleton.Avatar active shape="square" style={styles.styleSlider} />
    </Space>
  );
}
