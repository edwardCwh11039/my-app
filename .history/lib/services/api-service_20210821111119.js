import { message } from "antd";
import axios from "axios";
import { AES } from "crypto-js";
import { RootPath, SubPath } from "./api-path";
import storage from "./storage";

const getBaseUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.NEXT_PUBLIC_API || "http://localhost:8080/api";
  } else {
    return "https://cms-nextjs-antd.herokuapp.com/api";
  }
};
const baseURL = getBaseUrl();
const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  responseType: "json",
});

axiosInstance.interceptors.request.use((config) => {
  if (!config.url.includes("login")) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: "Bearer " + storage?.token,
      },
    };
  }

  return config;
});

class BaseApiService {
  async get(path, params) {
    path = this.getPath(path);
    path = !!params
      ? `${path}?${Object.entries(params)
          .map(([key, value]) => `${key}=${value}`)
          .join("&")}`
      : path;

    return axiosInstance
      .get(path)
      .then((res) => res.data)
      .catch((err) => this.errorHandler(err));
  }

  async post(path, params) {
    return axiosInstance
      .post(this.getPath(path), params)
      .then((res) => res.data)
      .catch(this.errorHandler);
  }

  async delete(path) {
    return axiosInstance
      .delete(this.getPath(path))
      .then((res) => res.data)
      .catch(this.errorHandler);
  }

  async put(path, params) {
    return axiosInstance
      .put(this.getPath(path), params)
      .then((res) => res.data)
      .catch(this.errorHandler);
  }

  /**
   * 根据 HTTP 状态码判断请求是否成功
   */
  isError(code) {
    return !(
      code.toString().startsWith("2") || code.toString().startsWith("3")
    );
  }

  /**
   * 显示 Api 上的提示信息
   */
  showMessage =
    (isSuccessDisplay = false) =>
    (res) => {
      const { code, msg } = res;
      const isError = this.isError(code);

      if (isError) {
        message.error(msg);
      }

      if (isSuccessDisplay && !isError) {
        message.success(msg);
      }

      return res;
    };

  /**
   * 处理 http 请求上的错误
   * 注意：此处返回的code是HTTP的状态码，并非后台自定义的code
   */
  errorHandler(err) {
    const msg = err.response.data.msg;
    const code = err.response.status;

    return { msg, code };
  }

  getPath(path) {
    return !Array.isArray(path) ? String(path) : path.join("/");
  }
}

class ApiService extends BaseApiService {
  login({ password, ...rest }) {
    return this.post(RootPath.login, {
      ...rest,
      password: AES.encrypt(password, "cms").toString(),
    }).then(this.showMessage());
  }
  logout() {
    return this.post(RootPath.logout, {}).then(this.showMessage());
  }
  getVehicle(req) {
    return this.get(RootPath.vehicle, req).then(this.showMessage());
  }
  createCourseCode() {
    return this.get([RootPath.vehicle, SubPath.code]).then(this.showMessage());
  }
  getVehicleCategories() {
    return this.get(RootPath.category).then(this.showMessage(false));
  }
  addVehicle(req) {
    return this.post([RootPath.vehicle], req).then(this.showMessage(true));
  }
  updateVehicle(req) {
    return this.put([RootPath.vehicle], req).then(this.showMessage(true));
  }
  addVehicleImage(req) {
    return this.post([RootPath.vehicle, SubPath.image], req).then(
      this.showMessage()
    );
  }
  addMultipleImages(req) {
    return this.post([RootPath.vehicle, SubPath.images], req).then(
      this.showMessage()
    );
  }
  updateStatus(req) {
    return this.put([RootPath.vehicle, SubPath.updateStatus], req).then(
      this.showMessage()
    );
  }
  getVehicleById(id) {
    return this.get([RootPath.vehicle, SubPath.detail], { id }).then(
      this.showMessage()
    );
  }
}

export const apiService = new ApiService();

export default apiService;
