import { Space, Spin } from "antd";
import "@/styles/Components/Loadings/loadingGeneral.css"

export default function LoadingGeneral() {
  return (
    <div className="loadingGeneral">
        <Space>
            <Spin tip="Loading" size="large">
                <div style={{ padding: "50px" }} />
            </Spin>
        </Space>
    </div>
  )
}
