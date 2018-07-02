import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Restaurant} from './restaurant/restaurant.model';
import {MenuItem} from './restaurant-detail/menu-item/menu-item.model';
import {Review} from './restaurant-detail/reviews/reviews.model';
import {RESTAURANT_API} from '../../app.constants';

@Injectable()
export class RestaurantsService {

    constructor(private http: HttpClient) {
    }


    reviews: Review[] = [
        {
            'name': 'Julia',
            'date': '2017-01-23T18:25:43',
            'rating': 4.5,
            'comments': 'Good!!!!!!',
            'restaurantId': 'peru',
            'imagePath': 'assets/images/page2_img1.jpg'
        },
        {
            'name': 'Maria',
            'date': '2017-01-23T18:25:43',
            'rating': 4.8,
            'comments': 'Great!!!',
            'restaurantId': 'brazilian',
            'imagePath': 'assets/images/page2_img2.jpg'
        },
    ];

    getAllRestaurants(): Observable<Restaurant[]> {
        return this.http.get<Restaurant[]>(`${RESTAURANT_API}/restaurants`);
    }

    getMenuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${RESTAURANT_API}/restaurants/${id}/menu`);
    }


    getReviewsOfRestaurants(id: string) {
        return this.reviews;
    }
}
