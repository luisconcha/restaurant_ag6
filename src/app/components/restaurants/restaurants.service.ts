import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Restaurant} from './restaurant/restaurant.model';
import {MenuItem} from './restaurant-detail/menu-item/menu-item.model';
import {Review} from './restaurant-detail/reviews/reviews.model';

@Injectable()
export class RestaurantsService {


    restaurants: Restaurant[] = [
        {
            'id': 'peru',
            'name': 'Perú Food ',
            'category': 'Criolla',
            'deliveryEstimate': '25m',
            'rating': 4.9,
            'imagePath': 'assets/images/page3_img1.jpg',
            'imagePathHref': 'assets/images/big1.jpg',
            'about': 'A Perú Foog has 20 years of market. Among the specialties we can highlight the ceviche and rice with chicken.',
            'hours': 'It runs from Monday to Friday, from 8 am to 11 pm'
        },
        {
            'id': 'brasil',
            'name': 'Brazilian Food',
            'category': 'Northeastern',
            'deliveryEstimate': '100m',
            'rating': 3.5,
            'imagePath': 'assets/images/page3_img2.jpg',
            'imagePathHref': 'assets/images/big2.jpg',
            'about': 'A Brazilian Foog has 40 years of market. Among the specialties we can highlight the Bahian foods.',
            'hours': 'It runs from Monday to Friday, from 8 am to 10 pm'
        }
    ];

    menu: MenuItem[] = [
        {
            'id': 'peru',
            'imagePath': 'assets/images/page3_img1.jpg',
            'name': 'Perú Food ',
            'description': 'Lima Cake recheado de Doce de Leite',
            'price': 25,
            'restaurantId': 'peru',
        },
        {
            'id': 'peru',
            'imagePath': 'assets/images/page3_img1.jpg',
            'name': 'Perú Food ',
            'description': 'BRB Cake recheado de Doce de Leite',
            'price': 25,
            'restaurantId': 'Brazilian',
        },
        {
            'id': 'mexico',
            'imagePath': 'assets/images/page3_img1.jpg',
            'name': 'Perú Food ',
            'description': 'Mexico Cake recheado de Doce de Leite',
            'price': 25,
            'restaurantId': 'Brazilian',
        },
    ];

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

    // constructor(private http: HttpClient) {
    // }

    getAllRestaurants() {
        return this.restaurants;
    }

    getMenuOfRestaurant(id: string) {
        return this.menu;
    }

    getReviewsOfRestaurants(id: string) {
        return this.reviews;
    }
}
