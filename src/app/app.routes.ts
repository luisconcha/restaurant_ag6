import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RestaurantsComponent} from './components/restaurants/restaurants.component';
import {RestaurantDetailComponent} from './components/restaurants/restaurant-detail/restaurant-detail.component';
import {MenuComponent} from './components/restaurants/restaurant-detail/menu/menu.component';
import {ReviewsComponent} from './components/restaurants/restaurant-detail/reviews/reviews.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {
        path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'chefs', loadChildren: './components/restaurants/restaurant-detail/chefs/chefs.module#ChefsModule'},
            {path: 'reviews', component: ReviewsComponent},
        ]
    },
    {path: 'restaurants', component: RestaurantsComponent},

    {path: 'about', loadChildren: './components/about/about.module#AboutModule'},
    {path: 'blog', loadChildren: './components/blog/blog.module#BlogModule'},
    {path: 'reservation', loadChildren: './components/reservation/reservation.module#ReservationModule'},
    {path: 'contact', loadChildren: './components/contact/contact.module#ContactModule'},
    {path: '**', component: NotFoundComponent}
];
