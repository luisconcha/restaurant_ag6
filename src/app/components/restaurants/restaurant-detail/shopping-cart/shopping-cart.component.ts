import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from './shopping-cart.service';

@Component({
    selector: 'lacc-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

    constructor(private shooppingCartService: ShoppingCartService) {
    }

    ngOnInit() {
    }

    /**
     * Function that receives data from the menu item by propertBinding from the menu.component.html
     * @param item
     */
    addItem(item: any) {
        return this.shooppingCartService.addItem(item);
    }

    clear() {
        this.shooppingCartService.clear();
    }

    items() {
        return this.shooppingCartService.items;
    }

    removeItem(item: any) {
        this.shooppingCartService.removeItem(item);
    }

    total() {
        return this.shooppingCartService.total();
    }


}
