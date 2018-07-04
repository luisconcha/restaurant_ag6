import {NgModule} from '@angular/core';
import {OrderComponent} from './order.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
    {path: '', component: OrderComponent}
];

@NgModule({
    declarations: [OrderComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class OrderModule {
}
