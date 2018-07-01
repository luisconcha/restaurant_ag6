import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {BlogComponent} from './components/blog/blog.component';
import {ReservationComponent} from './components/reservation/reservation.component';
import {ContactComponent} from './components/contact/contact.component';
import {RestaurantsComponent} from './components/restaurants/restaurants.component';
import {RestaurantDetailComponent} from './components/restaurants/restaurant-detail/restaurant-detail.component';
import {MenuComponent} from './components/restaurants/restaurant-detail/menu/menu.component';
import {ChefsComponent} from './components/restaurants/restaurant-detail/chefs/chefs.component';
import {ReviewsComponent} from './components/restaurants/restaurant-detail/reviews/reviews.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {
        path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'chefs', component: ChefsComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]
    },
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'reservation', component: ReservationComponent},
    {path: 'contact', component: ContactComponent}
];
