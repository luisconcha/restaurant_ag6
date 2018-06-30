import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {SocialNetwortkComponent} from './components/header/social-networtk/social-networtk.component';
import {StoreTitleComponent} from './components/header/store-title/store-title.component';
import {MenuComponent} from './components/header/menu/menu.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AboutComponent} from './components/about/about.component';
import {RouterModule} from '@angular/router';

import {ROUTES} from './app.routes';
import {BlogComponent} from './components/blog/blog.component';
import {ReservationComponent} from './components/reservation/reservation.component';
import {ContactComponent} from './components/contact/contact.component';
import {RestaurantsComponent} from './components/restaurants/restaurants.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SocialNetwortkComponent,
        StoreTitleComponent,
        MenuComponent,
        HeaderComponent,
        FooterComponent,
        AboutComponent,
        BlogComponent,
        ReservationComponent,
        ContactComponent,
        RestaurantsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
