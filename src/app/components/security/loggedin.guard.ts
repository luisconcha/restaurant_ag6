import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

import {LoginService} from './login/login.service';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {
    constructor(private loginService: LoginService) {
    }

    canLoad(route: Route): boolean {
        return this.checkAuthenticate(route.path);
    }

    canActivate(activateRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkAuthenticate(activateRoute.routeConfig.path);
    }

    checkAuthenticate(path: string): boolean {
        const loggedIn = this.loginService.isLoggedIn();

        if (!loggedIn) {
            this.loginService.handleLogin(`/${path}`);
        }

        return loggedIn;
    }
}
