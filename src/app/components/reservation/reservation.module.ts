import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReservationComponent} from './reservation.component';


const ROUTES: Routes = [
    {path: '', component: ReservationComponent}
];

@NgModule({
    declarations: [ReservationComponent],
    imports: [RouterModule.forChild(ROUTES)]
})

export class ReservationModule {

}
