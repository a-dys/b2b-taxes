import {Component, Input, Output, EventEmitter} from "angular2/core";
import {ViewEncapsulation} from "angular2/core";

@Component ({
    selector: 'month-item-renderer',
    template: `
    <style>
        .closed {
            text-decoration: line-through;
        }
    </style>
    <div>
    <span [ngClass]="month.status">{{month.title}}</span>
    <button (click)="toggle.emit(month)">Toggle</button>
    </div>`
})

export class MonthItemRenderer{
    @Input() month;
    @Output() toggle = new EventEmitter();
}