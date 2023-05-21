import { AuthPrompt } from '@Auth';
import { Dashboard } from '@Dashboard';
import { createRouter, createWebHashHistory } from 'vue-router';

export const AppRoutes = {
  AUTH: '/',
  DASHBOARD: '/dashboard'
} as const;
export type AppRoute = (typeof AppRoutes)[keyof typeof AppRoutes];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: AppRoutes.AUTH,
      component: AuthPrompt
    },
    {
      path: AppRoutes.DASHBOARD,
      component: Dashboard
    }
  ]
});

export default router;
