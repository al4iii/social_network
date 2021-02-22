import * as axios from "axios";

export const userAPI = {
  getUsers(currentPage = 1, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
};

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "2db7cc20-6bac-4680-98a4-5b530f945b7d",
  },
});
