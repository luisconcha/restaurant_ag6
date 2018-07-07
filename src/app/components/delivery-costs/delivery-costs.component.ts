import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'lacc-delivery-costs',
    templateUrl: './delivery-costs.component.html',
    styleUrls: ['./delivery-costs.component.css']
})
export class DeliveryCostsComponent implements OnInit {

    @Input() delivery: number;
    @Input() itemsValue: number;

    constructor() {
    }

    ngOnInit() {
    }

    total(): number {
        console.log('delivery: ', this.delivery);
        console.log('itemsValue: ', this.itemsValue);
        return this.delivery + this.itemsValue;
    }

}
