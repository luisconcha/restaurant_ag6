import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {BlogComponent} from './components/blog/blog.component';
import {ReservationComponent} from './components/reservation/reservation.component';
import {ContactComponent} from './components/contact/contact.component';
import {RestaurantsComponent} from './components/restaurants/restaurants.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'reservation', component: ReservationComponent},
    {path: 'contact', component: ContactComponent}
];
