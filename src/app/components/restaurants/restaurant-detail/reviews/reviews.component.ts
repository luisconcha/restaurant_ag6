import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {RestaurantsService} from '../../restaurants.service';

@Component({
    selector: 'lacc-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

    reviews;

    constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.reviews = this.restaurantsService.getReviewsOfRestaurants(this.route.parent.snapshot.params['id']);
    }

}
