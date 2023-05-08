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

<style scoped lang="scss"></style>
