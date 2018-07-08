import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {OrderComponent} from './order.component';

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {


    canDeactivate(orderComponent: OrderComponent,
                  activateRoute: ActivatedRouteSnapshot,
                  routerState: RouterStateSnapshot): boolean {

        if (!orderComponent.isOrderCompleted()) {
            return window.confirm('Do you want to give up the purchase?');
        } else {
            return true;
        }

    }
}