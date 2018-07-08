import {ErrorHandler, Injectable, Injector, NgZone} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

import {NotificationService} from './components/shared/messages/notification.service';
import {LoginService} from './components/security/login/login.service';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {
    constructor(private ns: NotificationService,
                private injector: Injector,
                private zone: NgZone) {
        super();
    }


    handleError(errorResponse: HttpErrorResponse | any) {
        if (errorResponse instanceof HttpErrorResponse) {
            const message = errorResponse.message;

            this.zone.run(() => {
                switch (errorResponse.status) {
                    case 0:
                        this.ns.notify(message || 'The was a problem on the backend server');
                        break;
                    case 401:
                        // when the login part is ready, inject the Injector into the constructor to avoid cyclical dependence.
                        this.injector.get(LoginService).handleLogin();
                        break;
                    case 403:
                        this.ns.notify(message || 'Not authorized');
                        break;
                    case 404:
                        this.ns.notify(message || 'Feature not found, check console for more details');
                        break;
                    case 500:
                        this.ns.notify(message || 'Server error, please check log for more details');
                        break;
                }
            });
        }
        super.handleError(errorResponse);
    }
}
