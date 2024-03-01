import axios from "axios";
import { ENV_BACKEND_URL } from "../../config/envConfig";
import RNSecureStorage from "rn-secure-storage";


console.log(ENV_BACKEND_URL)
export const apiInstance = axios.create({
  baseURL: ENV_BACKEND_URL,
});

// Add a request interceptor
apiInstance.interceptors.request.use(
  async (config) => {
    // let jwtToken;
    // RNSecureStorage.getItem("jwtToken")
    //   .then((res) => {
    //     console.log(res);
    //     jwtToken = res || "";
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // if (!jwtToken) {
    //   jwtToken = "";
    // }
    // if (jwtToken === "") {
    //   jwtToken = "";
    // }
    // if (jwtToken !== null) {
    //   // Add your default header here
    //   config.headers["Authorization"] = `Bearer ${jwtToken}` || "";
    // }
    config.headers["Content-Type"] = "application/json";

    // Modify Content-Type for specific routes - for multipart/form-data
    // Useful for Forms Data
    const routesForMultipartType: string[] = [""]; // Add type annotation to ensure it is treated as a string array

    if (routesForMultipartType.includes(config.url || "")) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    console.log("config");
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
