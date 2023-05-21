import type { UserProfileInfo } from '@Shared/types/user.type';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const googleAccessToken = ref('');
  const user = ref<UserProfileInfo | null>(null);

  function updateGoogleAccessToken(token: string) {
    googleAccessToken.value = token;
  }

  function saveUser(newUser: UserProfileInfo) {
    user.value = newUser;
  }

  return {
    googleAccessToken,
    user,
    updateGoogleAccessToken,
    saveUser
  };
});
