import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {LoginService} from './login.service';
import {NotificationService} from '../../shared/messages/notification.service';
import {PATTERS} from '../../shared/patterns';

@Component({
    selector: 'lacc-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    navigateTo: string;

    constructor(private fb: FormBuilder,
                private loginServive: LoginService,
                private activateRouter: ActivatedRoute,
                private router: Router,
                private notificationService: NotificationService) {
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: this.fb.control('', [Validators.required, Validators.pattern(PATTERS.email)]),
            password: this.fb.control('', [Validators.required])
        });

        this.navigateTo = this.activateRouter.snapshot.params['to'] || btoa('/');
    }

    login() {
        this.loginServive
            .login(this.loginForm.value.email, this.loginForm.value.password)
            .subscribe(
                user => this.notificationService.notify(`Welcome ${user.name}`),
                response => this.notificationService.notify(response.error.message),
                () => {
                    this.router.navigate([atob(this.navigateTo)]);
                }
            );
    }
}
