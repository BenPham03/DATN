import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';

export const adminGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const cookieService = inject(CookieService);
  const authService = inject(AuthService);
  const router = inject(Router);

  let token = cookieService.get('token');
  if (token) {
    token = token.replace('Bearer ', '');

    const decodeToken: any = jwtDecode(token);
    const expirationDate = decodeToken.exp * 1000;
    const currentTime = new Date().getTime();

    if (expirationDate < currentTime) {
      authService.logout();
      return router.createUrlTree(['/login'], {
        queryParams: { returnUrl: state.url },
      });
    }

    if (decodeToken.role === 'Admin') {
      return true;
    } else {
      return router.createUrlTree(['/unauthorized']); // hoặc trang khác
    }
  }

  authService.logout();
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url },
  });
};
export const adminOrDeanGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const cookieService = inject(CookieService);
  const authService = inject(AuthService);
  const router = inject(Router);

  let token = cookieService.get('token');
  if (token) {
    token = token.replace('Bearer ', '');

    const decodeToken: any = jwtDecode(token);
    const expirationDate = decodeToken.exp * 1000;
    const currentTime = new Date().getTime();

    if (expirationDate < currentTime) {
      authService.logout();
      return router.createUrlTree(['/login'], {
        queryParams: { returnUrl: state.url },
      });
    }

    const role = decodeToken.role?.toLowerCase();
    if (role === 'admin' || role === 'dean') {
      return true;
    } else {
      return router.createUrlTree(['/unauthorized']);
    }
  }

  authService.logout();
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url },
  });
};