<script setup lang="ts">
/// <reference types="chrome"/>
import GoogleLogo from '@/assets/google_logo.png';
import { Checkbox, useAuthStore } from '@Auth';
import { useAppStore } from '@Core';
import { AppRoutes } from '@Router';
import { RoundedButton } from '@Shared';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const appStore = useAppStore();
const authStore = useAuthStore();
const router = useRouter();

const acceptedTerms = ref(false);

function termsToggled(selected: boolean) {
  acceptedTerms.value = selected;
}

const onSignIn = () => {
  appStore.toggleLoading();

  authStore.signInToGoogle().subscribe(() => {
    appStore.toggleLoading();
    router.push(AppRoutes.DASHBOARD);
  });
};
</script>

<template>
  <div class="auth-container">
    <h3>Welcome!</h3>
    <p>
      If your inbox is a mess, just sign into your google account and let us take care of it. :)
    </p>
    <Checkbox name="terms_conditions" id="checkboxTermsAndConditions" @changed="termsToggled">
      I have read and accept the &nbsp; <a href="#">Terms and Conditions</a> &nbsp; and &nbsp;
      <a href="#"> Privacy Policy</a>
    </Checkbox>
    <RoundedButton
      :loading="appStore.loading"
      :attrs="{ disabled: !acceptedTerms || appStore.loading, id: 'buttonSignIn' }"
      :onClick="onSignIn"
    >
      <img class="google-logo" :src="GoogleLogo" alt="Google Logo" />
      Sign in
    </RoundedButton>
  </div>
</template>

<style scoped lang="scss">
.auth-container {
  color: var(--v-theme-primary);
  font-family: $primary-font-family;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  flex: 1;

  h3 {
    font-weight: 900;
    font-size: 20px;
    line-height: 20px;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }

  .google-logo {
    width: 20px;
    height: 20px;
    margin-right: 4px;
  }

  a {
    font-weight: 700;
    text-decoration: underline;
  }
}
</style>
