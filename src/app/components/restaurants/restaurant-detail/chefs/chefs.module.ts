import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ChefsComponent} from './chefs.component';


const ROUTES: Routes = [
    {path: '', component: ChefsComponent}
];

@NgModule({
    declarations: [ChefsComponent],
    imports: [RouterModule.forChild(ROUTES)]
})

export class ChefsModule {

}
