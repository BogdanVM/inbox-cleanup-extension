<script setup lang="ts">
import { OptionsIcon, UserAvatar } from '@Assets';
</script>

<template>
  <div id="user-profile">
    <div class="user-info">
      <div class="profile-img-wrapper">
        <img :src="UserAvatar" alt="User avatar" />
      </div>
      <div class="welcome-msg-wrapper">
        <h3>Hi, <span>Bogdan</span></h3>
      </div>
    </div>
    <div class="options-menu">
      <OptionsIcon />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#user-profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  .user-info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .profile-img-wrapper {
      margin-right: 8px;
      display: flex;
      align-items: center;

      img {
        width: 28px;
        height: 28px;
      }
    }

    .welcome-msg-wrapper {
      h3 {
        color: var(--v-theme-primary);
        font-family: $primary-font-family;
        font-size: 14px;
        font-weight: 500;
        line-height: 14px;
        text-transform: uppercase;

        span {
          font-weight: 900;
        }
      }
    }
  }

  .options-menu {
    cursor: pointer;
    fill: var(--v-theme-primary);
  }
}
</style>
