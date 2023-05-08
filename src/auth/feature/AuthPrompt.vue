<script setup lang="ts">
import Checkbox from '@Auth/ui/CheckboxComponent.vue';

function termsToggled(selected: boolean) {
  console.log('TERMS TOGGLED', selected);
}
</script>

<template>
  <div class="auth-container">
    <h3>Welcome!</h3>
    <p>
      If your inbox is a mess, just sign into your google account and let us take care of it. :)
    </p>
    <Checkbox name="terms_conditions" id="checkboxTermsAndConditions" @changed="termsToggled">
      I have read and accept the <a href="#">Terms and Conditions</a> and
      <a href="#"> Privacy Policy</a>
    </Checkbox>
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
}

a {
  font-weight: 700;
  text-decoration: underline;
}
</style>
