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

    getAllRestaurants(): Observable<Restaurant[]> {
        return this.http.get<Restaurant[]>(`${RESTAURANT_API}/restaurants`);
    }

    getMenuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${RESTAURANT_API}/restaurants/${id}/menu`);
    }


    getReviewsOfRestaurants(id: string): Observable<Review> {
        return this.http.get<Review>(`${RESTAURANT_API}/restaurants/${id}/reviews`);
    }
}
