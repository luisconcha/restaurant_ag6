import {NgModule} from '@angular/core';
import {OrderComponent} from './order.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {OrderItemsComponent} from './order-items/order-items.component';
import {DeliveryCostsComponent} from '../delivery-costs/delivery-costs.component';

const ROUTES: Routes = [
    {path: '', component: OrderComponent}
];

@NgModule({
    declarations: [OrderComponent, OrderItemsComponent, DeliveryCostsComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class OrderModule {
}
