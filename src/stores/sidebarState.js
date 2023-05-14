import { defineStore } from "pinia";
export const useSidebarState = defineStore("sidebarState", {
  state: () => {
    return { state: true };
  },
  actions: {
    changeSidebarState() {
      this.state = !this.state;
    },
  },
});
