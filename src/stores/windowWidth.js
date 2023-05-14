import { defineStore } from "pinia";
export const useWindowWidth = defineStore("windowWidth", {
  state: () => {
    return { width: window.innerWidth };
  },
  actions: {
    setWidth(width) {
      this.width = width;
    },
  },
});
