import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isLogined: localStorage.getItem("token") ? true : false,
      username: localStorage.getItem("token") ? localStorage.getItem("username") : null,
    };
  },
  actions: {
    login(username, token) {
      this.isLogined = true;
      this.username = username;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
    },
    logout() {
      this.isLogined = false;
      this.username = null;
      localStorage.removeItem("username");
      localStorage.removeItem("token");
    },
  },
});
