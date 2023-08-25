import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AxiosInterceptor from "./utils/interceptors/axios.interceptor";
import App from "./App";
import { store } from "./config/redux/store";
import "./index.css";



// const tagManagerArgs = {
//   gtmId: "GTM-P99JWR5"
// };

// TagManager.initialize(tagManagerArgs);

AxiosInterceptor();
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
