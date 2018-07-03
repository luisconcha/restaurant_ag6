import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ContactComponent} from './contact.component';


const ROUTES: Routes = [
    {path: '', component: ContactComponent}
];

@NgModule({
    declarations: [ContactComponent],
    imports: [RouterModule.forChild(ROUTES)]
})

export class ContactModule {

}
