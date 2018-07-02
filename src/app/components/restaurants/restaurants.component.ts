import {Component, OnInit} from '@angular/core';
import {switchMap, tap, debounceTime, distinctUntilChanged, catchError} from 'rxjs/operators';

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
        this.restaurantService.getAllRestaurants()
            .pipe(
                //tap(restaurants => console.log('R: ', restaurants))
            )
            .subscribe(restaurants => this.restaurants = restaurants);
    }

}
