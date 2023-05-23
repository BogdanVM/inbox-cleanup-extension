import AuthPrompt from '@/auth/feature/AuthPrompt.vue';
import { Dashboard } from '@Dashboard';
import { createRouter, createWebHashHistory } from 'vue-router';
import { checkAuth } from './check-auth';

export const AppRoutes = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard'
} as const;
export type AppRoute = (typeof AppRoutes)[keyof typeof AppRoutes];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '',
      redirect: { path: AppRoutes.DASHBOARD }
    },
    {
      path: AppRoutes.AUTH,
      component: AuthPrompt
    },
    {
      path: AppRoutes.DASHBOARD,
      component: Dashboard,
      beforeEnter: checkAuth
    }
  ]
});

export default router;
