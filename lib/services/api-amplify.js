import { API, Auth, Cache } from "aws-amplify";

const apiName = "cmsAmplify";
const path = "/vehicle";
const myInit = {
  // OPTIONAL
  headers: {}, // OPTIONAL
  response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
  queryStringParameters: {
    // OPTIONAL
    name: "param",
  },
};

class ApiService {
  apiName;
  myInit;

  constructor() {
    this.apiName = "cmsAmplify";
    this.myInit = {
      // OPTIONAL
      headers: {}, // OPTIONAL
      response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
      queryStringParameters: {
        // OPTIONAL
        name: "param",
      },
    };
  }

  async register(req) {
    return await Auth.signUp({
      username: req.username,
      password: req.password,
    });
  }

  async login(req) {
    const user = await Auth.signIn(req.username, req, password);
    const federatedInfo = Cache.getItem("federatedInfo");
    const { token } = federatedInfo;

    return { ...user, ...token };
  }

  async logout() {
    return await Auth.signOut();
  }

  async addVehicle() {}

  async updateVehicle() {}

  async removeVehicle() {}

  async getVehicle() {
    return API.get(apiName, "/vehicle");
  }

  async getVehicleById() {}
}

export const apiService = new ApiService();

export default apiService;
