import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {OrderService} from './order.service';
import {CartItem} from '../restaurants/restaurant-detail/shopping-cart/cart-item.model';

@Component({
    selector: 'lacc-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

    orderForm: FormGroup;
    delivery: number = 10;
    orderId: string;


    constructor(private orderService: OrderService,
                private router: Router,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.orderForm = new FormGroup({
            name: new FormControl('', {
                validators: [Validators.required, Validators.minLength(5)]
            })
        });
    }

    itemsValue(): number {
        return this.orderService.itemsValue();
    }

    cartItems(): CartItem[] {
        return this.orderService.cartItems();
    }

    decreaseQtd(item: CartItem) {
        return this.orderService.decreaseQtd(item);
    }

    increaseQtd(item: CartItem) {
        return this.orderService.increaseQtd(item);
    }

    checkOrder() {
        return false;
    }

    isOrderCompleted(): boolean {
        return this.orderId !== undefined;
    }
}
