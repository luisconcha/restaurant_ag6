import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {tap} from 'rxjs/operators';

import {RestaurantsService} from '../../restaurants.service';
import {Observable} from 'rxjs/index';
import {Review} from './reviews.model';

@Component({
    selector: 'lacc-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

    reviews: Observable<Review>;
    imgReaction: string = '';

    constructor(private restaurantsService: RestaurantsService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        /**
         * In this context when obtaining the reviews you do not need to use subscribe because in the html component
         * when doing ngFor use the PIPE SYNC which already does the subscribe automatically
         * @type {Observable<Review>}
         */
        this.reviews = this.restaurantsService.getReviewsOfRestaurants(this.route.parent.snapshot.params['id']);


        // this.restaurantsService.getReviewsOfRestaurants(this.route.parent.snapshot.parent.params['id'])
        //     .pipe(
        //         tap(reviews => console.log('review: ', reviews))
        //     )
        //     .subscribe(reviews => this.reviews = reviews);

    }

}
