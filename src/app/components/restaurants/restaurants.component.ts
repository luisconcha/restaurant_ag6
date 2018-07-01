import {Component, OnInit} from '@angular/core';
import {Restaurant} from './restaurant/restaurant.model';
import {RestaurantsService} from './restaurants.service';

@Component({
    selector: 'lacc-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

    restaurants: Restaurant[] = [];

    constructor(private restaurantService: RestaurantsService) {
    }

    ngOnInit() {
        // this.restaurantService.getAllRestaurants().subscribe(restaurants => this.restaurants = restaurants);
        this.restaurants = this.restaurantService.getAllRestaurants();
    }

}
