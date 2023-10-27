import { message } from "antd";

export const useCustomAlerts = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const alertSuccess = (content) => {
    messageApi.success({
      key: "updatable",
      type: "success",
      content: content,
      duration: 2,
    });
  };

  const alertError = (content) => {
    messageApi.error({
      key: "updatable",
      type: "error",
      content: content,
      duration: 2,
    });
  };

  const alertLoading = (content) => {
    messageApi.loading({
      key: "updatable",
      type: "loading",
      content: content,
    });
  };

  return {
    messageApi,
    contextHolder,
    alertSuccess,
    alertError,
    alertLoading,
  };
};
