import { defineStore } from "pinia";
import { ref } from "vue";

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string | null;
}

export const useProfileStore = defineStore("profile", () => {
  const userProfile = ref<UserProfile>({
    firstName: "Ben",
    lastName: "Write",
    email: "ben@example.com",
    avatar: null,
  });

  return { userProfile };
});
