import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import locatePt from '@angular/common/locales/pt';

registerLocaleData(locatePt, 'pt');


import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {SocialNetwortkComponent} from './components/header/social-networtk/social-networtk.component';
import {StoreTitleComponent} from './components/header/store-title/store-title.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {PreloadAllModules, RouterModule} from '@angular/router';

import {ROUTES} from './app.routes';
import {SharedModule} from './components/shared/shared.module';

import {RestaurantsComponent} from './components/restaurants/restaurants.component';
import {RestaurantComponent} from './components/restaurants/restaurant/restaurant.component';
import {RestaurantDetailComponent} from './components/restaurants/restaurant-detail/restaurant-detail.component';
import {MenuComponent} from './components/restaurants/restaurant-detail/menu/menu.component';
import {MenuItemComponent} from './components/restaurants/restaurant-detail/menu-item/menu-item.component';
import {ShoppingCartComponent} from './components/restaurants/restaurant-detail/shopping-cart/shopping-cart.component';
import {ReviewsComponent} from './components/restaurants/restaurant-detail/reviews/reviews.component';
import {NotFoundComponent} from './components/not-found/not-found.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SocialNetwortkComponent,
        StoreTitleComponent,
        HeaderComponent,
        FooterComponent,
        RestaurantsComponent,
        RestaurantComponent,
        RestaurantDetailComponent,
        MenuComponent,
        MenuItemComponent,
        ShoppingCartComponent,
        ReviewsComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule.forRoot(),
        RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: LOCALE_ID, useValue: 'pt'}
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
