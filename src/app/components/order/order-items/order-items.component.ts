import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItem} from '../../restaurants/restaurant-detail/shopping-cart/cart-item.model';

@Component({
    selector: 'lacc-order-items',
    templateUrl: './order-items.component.html',
    styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

    @Input() items: CartItem[];
    @Output() increaseQtd = new EventEmitter<CartItem>();
    @Output() decreaseQtd = new EventEmitter<CartItem>();
    @Output() remove = new EventEmitter<CartItem>();

    constructor() {
    }

    ngOnInit() {
    }

    emitIncreaseQtd(item: CartItem) {
        this.increaseQtd.emit(item);
    }

    emitDecreaseQtd(item: CartItem) {
        this.decreaseQtd.emit(item);
    }

    emitRemove(item: CartItem) {
        this.remove.emit(item);
    }

}
