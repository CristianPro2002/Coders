import { Skeleton } from "antd";

export default function SkeletonPlaces() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      <Skeleton.Input
        style={{ width: "350px", height: "200px" }}
        active
        size="small"
      />
      <Skeleton.Input
        style={{ width: "350px", height: "200px" }}
        active
        size="small"
      />
      <Skeleton.Input
        style={{ width: "350px", height: "200px" }}
        active
        size="small"
      />
    </div>
  );
}
