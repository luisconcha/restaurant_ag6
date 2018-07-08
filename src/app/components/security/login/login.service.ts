import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NavigationEnd, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {tap} from 'rxjs/internal/operators';

import {User} from './login.model';
import {RESTAURANT_API} from '../../../app.constants';

@Injectable()
export class LoginService {
    user: User;
    lastUrl: string;

    constructor(private http: HttpClient, private router: Router) {
        this.router.events
            .pipe(filter(e => e instanceof NavigationEnd))
            .subscribe((e: NavigationEnd) => this.lastUrl = e.url);
    }

    login(email: string, password: string): Observable<User> {
        return this.http
            .post<User>(`${RESTAURANT_API}/login`, {email: email, password: password})
            .pipe(tap(user => this.user = user));
    }

    isLoggedIn(): boolean {
        return this.user !== undefined;
    }

    handleLogin(path: string = this.lastUrl) {
        this.router.navigate(['/login', btoa(path)]);
    }

    logout() {
        this.user = undefined;
    }
}
