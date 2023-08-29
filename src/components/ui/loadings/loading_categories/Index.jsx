import { Skeleton, Space } from "antd";
import { loadingCategories } from "@/styles/Components/Loadings/loadingCategories";

export default function Loading_Categories() {
  const { styles } = loadingCategories();

  return (
    <Space direction="vertical" style={styles.styleSpace}>
      <center style={{ display: "flex", flexDirection: "column" }}>
        <Skeleton.Image active style={{ padding: "10px" }} />
      </center>
      <Skeleton.Avatar
        active
        shape="square"
        className="categories-skeleton-avatar"
        style={styles.styleCard}
      />
      <div style={{ paddingTop: "30px" }}>
        <Skeleton.Input active />
      </div>
      <Skeleton.Avatar active shape="square" style={styles.styleSlider} />
    </Space>
  );
}
