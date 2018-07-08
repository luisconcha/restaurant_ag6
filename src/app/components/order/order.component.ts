import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {OrderService} from './order.service';
import {CartItem} from '../restaurants/restaurant-detail/shopping-cart/cart-item.model';
import {PATTERS} from '../shared/patterns';
import {RadioOption} from '../shared/radio/radio-option.model';
import {Order, OrderItem} from './order.model';
import {tap} from 'rxjs/operators';

@Component({
    selector: 'lacc-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

    orderForm: FormGroup;
    delivery: number = 10;
    orderId: string;

    paymentOptions: RadioOption[] = [
        {label: 'Money', value: 'MON'},
        {label: 'Credit cart', value: 'CC'},
        {label: 'Debit cart', value: 'CD'},
        {label: 'Other', value: 'NN'}
    ];

    constructor(private orderService: OrderService,
                private router: Router,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.orderForm = this.formBuilder.group({
            name: new FormControl('', {
                validators: [Validators.required, Validators.minLength(3)]
            }),
            address: new FormControl('', [Validators.required, Validators.minLength(5)]),
            number: new FormControl('', [Validators.required, Validators.pattern(PATTERS.number)]),
            email: new FormControl('', [Validators.required, Validators.pattern(PATTERS.email)]),
            emailConfirmation: new FormControl('', [Validators.required, Validators.pattern(PATTERS.email)]),
            optionalAddress: this.formBuilder.control(''),
            paymentOptions: new FormControl('', [Validators.required]),
        }, {validators: [this.emailEqualsTo], updateOn: 'blur'});
    }

    private emailEqualsTo(group: AbstractControl): { [key: string]: boolean } {
        const email = group.get('email');
        const emailConfirmation = group.get('emailConfirmation');

        if (!email || !emailConfirmation) {
            return undefined;
        }

        if (email.value !== emailConfirmation.value) {
            return {emailsNotMatch: true};
        }

        return undefined;
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

    remove(item: CartItem) {
        return this.orderService.remove(item);
    }

    checkOrder(order: Order) {
        order.orderItems = this.cartItems()
            .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));

        this.orderService.checkOrder(order)
            .pipe(
                tap((orderId: string) => {
                    this.orderId = orderId;
                })
            )
            .subscribe(() => {
                this.router.navigate(['/order-summary']);
                this.orderService.clear();
            });
    }

    isOrderCompleted(): boolean {
        return this.orderId !== undefined;
    }
}
