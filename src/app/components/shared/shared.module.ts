import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {FoodComponent} from './messages/food/food.component';
import {NotificationService} from './messages/notification.service';
import {InputComponent} from './input/input.component';
import {OrderService} from '../order/order.service';
import {RadioComponent} from './radio/radio.component';
import {ShoppingCartService} from '../restaurants/restaurant-detail/shopping-cart/shopping-cart.service';
import {RestaurantsService} from '../restaurants/restaurants.service';


@NgModule({
    declarations: [FoodComponent, InputComponent, RadioComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [CommonModule, FormsModule, ReactiveFormsModule,
        InputComponent, FoodComponent, RadioComponent]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ShoppingCartService,
                RestaurantsService,
                NotificationService,
                OrderService
            ]
        };
    }
}
