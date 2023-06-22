import type { UserProfileInfo } from '@Shared';
import { defineStore } from 'pinia';
import { delay, from, map, switchMap, take } from 'rxjs';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const googleAccessToken = ref('');
  const user = ref<UserProfileInfo | null>(null);

  function isUserSignedIn() {
    return from(chrome.identity.getProfileUserInfo({})).pipe(
      map((userInfo) => {
        return !!userInfo && !!userInfo.email && !!userInfo.id;
      }),
      take(1)
    );
  }

  function logout() {
    return from(chrome.identity.clearAllCachedAuthTokens()).pipe(
      map((_) => {
        googleAccessToken.value = '';
        user.value = null;
      }),
      take(1)
    );
  }

  function updateGoogleAccessToken(token: string) {
    googleAccessToken.value = token;
  }

  function saveUser(newUser: UserProfileInfo) {
    user.value = newUser;
  }

  function signInToGoogle() {
    const getAuthToken$ = from(chrome.identity.getAuthToken({ interactive: true }));
    const getProfileUserInfo$ = from(chrome.identity.getProfileUserInfo({}));

    return getAuthToken$.pipe(
      switchMap(({ token }) => {
        if (typeof token !== 'string') {
          // TODO: Show error here
          throw new Error('Not good');
        }

        updateGoogleAccessToken(token);
        return getProfileUserInfo$;
      }),
      map((userInfo) => saveUser(userInfo)),
      delay(500),
      take(1)
    );
  }

  return {
    googleAccessToken,
    user,
    isUserSignedIn,
    logout,
    updateGoogleAccessToken,
    saveUser,
    signInToGoogle
  };
});
