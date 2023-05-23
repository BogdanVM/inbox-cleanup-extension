import { useAuthStore } from '@/auth';
import { firstValueFrom } from 'rxjs';
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { AppRoutes } from '.';

export async function checkAuth(
  _: RouteLocationNormalized,
  __: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const authStore = useAuthStore();

  try {
    const isUserSignedIn = await firstValueFrom(authStore.isUserSignedIn());
    if (!isUserSignedIn) return next({ path: AppRoutes.AUTH });

    return next();
  } catch (err) {
    return next({ path: AppRoutes.AUTH });
  }
}
