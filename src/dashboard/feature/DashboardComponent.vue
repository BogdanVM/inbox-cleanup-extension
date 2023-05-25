<script setup lang="ts">
import CheckedIcon from '@/assets/checked.svg';
import { ActionPicker, UserProfile } from '@Dashboard';
import { RoundedButton } from '@Shared';
</script>

<template>
  <UserProfile />
  <ActionPicker />

  <div id="confirm-section">
    <p>Please be careful as these operations are irreversible</p>
    <RoundedButton class="confirm-btn" custom-design="true">
      <CheckedIcon class="checked-icon" />
      <span>Confirm</span>
    </RoundedButton>
  </div>
</template>

<style lang="scss">
#confirm-section {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;

  p {
    color: $accent-color;
    font-family: $primary-font-family;
    font-size: 10px;
    font-weight: 900;
    line-height: 12px;
    text-align: center;
    text-decoration: underline;
  }

  .confirm-btn {
    margin-top: 4px;

    .checked-icon {
      margin-right: 8px;
      fill: $primary-color-dark;
    }

    span {
      color: $primary-color-dark;
      font-size: 12px;
      font-family: $primary-font-family;
      font-weight: 900;
      line-height: 12px;
    }
  }

  .custom-btn {
    background: $accent-color;
    color: $primary-color-dark;
    font-size: 12px;
    font-weight: 900;
    line-height: 12px;
    padding: 10px 14px;
  }
}
</style>
