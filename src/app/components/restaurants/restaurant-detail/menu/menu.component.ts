import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {MenuItem} from '../menu-item/menu-item.model';
import {RestaurantsService} from '../../restaurants.service';

@Component({
    selector: 'lacc-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    menu: MenuItem[];

    constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.menu = this.restaurantService.getMenuOfRestaurant(this.route.parent.snapshot.params['id']);
    }

}
