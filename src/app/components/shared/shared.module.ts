import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {FoodComponent} from './messages/food/food.component';
import {NotificationService} from './messages/notification.service';
import {InputComponent} from './input/input.component';
import {OrderService} from '../order/order.service';


@NgModule({
    declarations: [FoodComponent, InputComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [CommonModule, FormsModule, ReactiveFormsModule, InputComponent, FoodComponent]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                NotificationService,
                OrderService
            ]
        };
    }
}
