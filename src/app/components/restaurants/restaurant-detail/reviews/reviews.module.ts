import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ReviewsComponent} from './reviews.component';


const ROUTES: Routes = [
    {path: '', component: ReviewsComponent}
];

@NgModule({
    declarations: [ReviewsComponent],
    imports: [RouterModule.forChild(ROUTES)]
})

export class ReviewsModule {

}
