import { Skeleton } from "antd";

export default function SkeletonPlaceGeneral() {
  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        padding: "60px",
      }}
    >
      <Skeleton.Input
        style={{ width: "100%", marginBottom: "60px" }}
        active
        size="large"
      />
      <Skeleton
        style={{ width: "100%", marginBottom: "10px" }}
        active
        size="default"
      />
      <br />
      <Skeleton.Input
        style={{ width: "100%", marginBottom: "10px" }}
        active
        size="small"
      />
    </div>
  );
}
