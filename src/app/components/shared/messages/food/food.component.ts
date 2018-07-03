import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {timer} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';

import {NotificationService} from '../notification.service';

@Component({
    selector: 'lacc-food-messages',
    templateUrl: './food.component.html',
    styleUrls: ['./food.component.css'],
    animations: [
        trigger('food-visibility', [
            state('hidden', style({
                opacity: 0,
                bottom: '0px'
            })),
            state('visible', style({
                opacity: 1,
                bottom: '30px'
            })),
            // state('visible', style({})),
            transition('hidden => visible', animate('500ms 0s ease-in')),
            transition('visible => hidden', animate('500ms 0s ease-out'))
        ])
    ]
})
export class FoodComponent implements OnInit {

    message: string;

    snackMessageVisibility: string = 'hidden';

    constructor(private notificationService: NotificationService) {
    }

    ngOnInit() {
        this.notificationService.notifier
            .pipe(
                tap(message => {
                    this.message = message;
                    this.snackMessageVisibility = 'visible';
                }),
                switchMap(message => timer(3000))
            )
            .subscribe(() => this.snackMessageVisibility = 'hidden');
    }

}
