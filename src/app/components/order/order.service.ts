import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

import {ShoppingCartService} from '../restaurants/restaurant-detail/shopping-cart/shopping-cart.service';
import {CartItem} from '../restaurants/restaurant-detail/shopping-cart/cart-item.model';
import {Order} from './order.model';
import {Observable} from 'rxjs/index';
import {RESTAURANT_API} from '../../app.constants';

@Injectable()
export class OrderService {

    constructor(private shoppingCartService: ShoppingCartService,
                private http: HttpClient) {
    }

    cartItems(): CartItem[] {
        return this.shoppingCartService.items;
    }

    increaseQtd(item: CartItem) {
        this.shoppingCartService.increaseQtd(item);
    }

    decreaseQtd(item: CartItem) {
        this.shoppingCartService.decreaseQtd(item);
    }

    remove(item: CartItem) {
        this.shoppingCartService.removeItem(item);
    }

    itemsValue() {
        return this.shoppingCartService.total();
    }

    checkOrder(order: Order): Observable<string> {
        return this.http
            .post<Order>(`${RESTAURANT_API}/orders`, order)
            .pipe(
                map(order => order.id)
            );
    }

    clear() {
        this.shoppingCartService.clear();
    }

}
