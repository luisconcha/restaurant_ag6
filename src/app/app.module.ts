import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {SocialNetwortkComponent} from './components/header/social-networtk/social-networtk.component';
import {StoreTitleComponent} from './components/header/store-title/store-title.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AboutComponent} from './components/about/about.component';
import {RouterModule} from '@angular/router';

import {ROUTES} from './app.routes';
import {BlogComponent} from './components/blog/blog.component';
import {ReservationComponent} from './components/reservation/reservation.component';
import {ContactComponent} from './components/contact/contact.component';
import {RestaurantsComponent} from './components/restaurants/restaurants.component';
import {RestaurantComponent} from './components/restaurants/restaurant/restaurant.component';
import {RestaurantsService} from './components/restaurants/restaurants.service';
import {RestaurantDetailComponent} from './components/restaurants/restaurant-detail/restaurant-detail.component';
import {MenuComponent} from './components/restaurants/restaurant-detail/menu/menu.component';
import {MenuItemComponent} from './components/restaurants/restaurant-detail/menu-item/menu-item.component';
import {ReviewsComponent} from './components/restaurants/restaurant-detail/reviews/reviews.component';
import {ChefsComponent} from './components/restaurants/restaurant-detail/chefs/chefs.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SocialNetwortkComponent,
        StoreTitleComponent,
        HeaderComponent,
        FooterComponent,
        AboutComponent,
        BlogComponent,
        ReservationComponent,
        ContactComponent,
        RestaurantsComponent,
        RestaurantComponent,
        RestaurantDetailComponent,
        MenuComponent,
        MenuItemComponent,
        ReviewsComponent,
        ChefsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [RestaurantsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
