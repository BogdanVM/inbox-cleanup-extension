<script setup lang="ts">
import { CheckedIcon } from '@Assets';
import { ActionPicker, UserProfile } from '@Dashboard';
import { RoundedButton } from '@Shared';
</script>

<template>
  <div id="dashboard-section">
    <UserProfile />
    <ActionPicker />

    <div id="confirm-section">
      <p>Please be careful as these operations are irreversible</p>
      <RoundedButton class="confirm-btn" custom-design="true">
        <CheckedIcon class="checked-icon" />
        <span>Confirm</span>
      </RoundedButton>
    </div>
  </div>
</template>

<style lang="scss">
#dashboard-section {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 8px 0;

  #confirm-section {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    flex: 1;

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
}
</style>
