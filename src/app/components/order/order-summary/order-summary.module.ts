import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OrderSummaryComponent} from './order-summary.component';


const ROUTES: Routes = [
    {path: '', component: OrderSummaryComponent}
];

@NgModule({
    declarations: [OrderSummaryComponent],
    imports: [RouterModule.forChild(ROUTES)]
})

export class OrderSummaryModule {

}
