import { defineStore } from "pinia";
export const useProfileInfo = defineStore("profileInfo", {
  state: () => {
    return {
      profileInfo: {
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        about: "",
        profilePic: "",
      },
    };
  },
});
