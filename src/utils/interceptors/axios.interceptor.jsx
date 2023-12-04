import axios from "axios";
import { getValidationError } from "../functions/get-validation-error";

export const AxiosInterceptor = () => {
    const updateToken = (request) => {
        const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
        if (token) {
            request.headers["Authorization"] = `Bearer ${token}`;
            request.headers["Content-Type"] = "application/json";
        }
        return request;
    };

    const updateTokenAssets = (request) => {
        const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
        if (token) {
            request.headers["Authorization"] = `Bearer ${token}`;
            request.headers["Content-Type"] = "multipart/form-data";
        }
        return request;
    };

    axios.interceptors.request.use((request) => {
        if (request.url.includes("assets")) updateTokenAssets(request);
        return updateToken(request);
    });

    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            // if (error.response.status === 401) {
            //     localStorage.removeItem("token");
            //     localStorage.removeItem("place");
            //     localStorage.removeItem("language");
            //     window.location.href = "/login";
            // }
            console.log(getValidationError(error.code));
            return Promise.reject(error);
        }
    );
};

export default AxiosInterceptor;