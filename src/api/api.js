import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "2db7cc20-6bac-4680-98a4-5b530f945b7d",
  },
});

export const API = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getFollow(id) {
    return instance.post(`follow/${id}`);
  },
  getUnFollow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
  getAuthUserData() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};
