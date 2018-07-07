import {AfterContentInit, Component, ContentChild , Input, OnInit} from '@angular/core';
import {FormControlName, NgModel} from '@angular/forms';

@Component({
    selector: 'lacc-input-container',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {

    @Input() label: string;
    @Input() errorMessage: string;
    @Input() showTip: boolean = true;
    input: any;

    @ContentChild(NgModel) model: NgModel;
    @ContentChild(FormControlName) control: FormControlName;


    constructor() {
    }

    ngOnInit() {
    }

    ngAfterContentInit(): void {
        this.input = this.model || this.control;
        if (this.input === undefined) {
            throw new Error('This component needs to be used with a ngModel or FormControlName directive');
        }
    }

    hasSuccess(): boolean {
        return this.input.valid && (this.input.dirty || this.input.touched);
    }

    hasError(): boolean {
        return !this.input.valid && (this.input.dirty || this.input.touched);
    }
}
