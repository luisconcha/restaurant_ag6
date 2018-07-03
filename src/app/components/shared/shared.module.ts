import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {FoodComponent} from './messages/food/food.component';
import {NotificationService} from './messages/notification.service';

@NgModule({
    declarations: [FoodComponent],
    imports: [CommonModule],
    exports: [CommonModule, FoodComponent]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                NotificationService
            ]
        };
    }
}
