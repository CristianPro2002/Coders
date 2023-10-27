import { Skeleton } from "antd";

export default function SkeletonPlaceHome() {
  return (
    <div style={{ width: "100%", display: "flex", padding: "60px" }}>
      <div style={{ width: "50%" }}>
        <Skeleton.Input
          style={{ width: "100%", marginBottom: "60px" }}
          active
          size="small"
        />
        <Skeleton
          style={{ width: "100%", marginBottom: "10px" }}
          active
          size="default"
        />
        <Skeleton.Image
          style={{ width: "150px", height: "150px", marginBottom: "10px" }}
        />
        <br />
        <Skeleton.Input
          style={{ width: "100%", marginBottom: "10px" }}
          active
          size="small"
        />
        <br />
        <Skeleton.Input
          style={{ width: "100%", marginBottom: "10px" }}
          active
          size="small"
        />
        <br />
        <Skeleton.Image
          style={{ width: "90px", height: "200px", marginBottom: "10px" }}
        />
      </div>
      <div style={{ width: "50%" }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Skeleton.Input
            style={{ width: "360px", height: "800px" }}
            active
            size="large"
          />
        </div>
      </div>
    </div>
  );
}
