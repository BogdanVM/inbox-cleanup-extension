import AuthPrompt from '@Auth/feature/AuthPrompt.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '',
      component: AuthPrompt
    }
  ]
});

export default router;
