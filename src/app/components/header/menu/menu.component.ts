import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'lacc-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

    showMenu: boolean = false

    constructor() {
    }

    ngOnInit() {
    }

    openMenu() {
        this.showMenu = !this.showMenu;
    }
}
