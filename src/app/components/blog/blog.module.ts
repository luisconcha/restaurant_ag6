import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BlogComponent} from './blog.component';


const ROUTES: Routes = [
    {path: '', component: BlogComponent}
];

@NgModule({
    declarations: [BlogComponent],
    imports: [RouterModule.forChild(ROUTES)]
})

export class BlogModule {

}
