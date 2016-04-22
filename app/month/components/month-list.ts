import {Component, Input} from "angular2/core"
import {MonthService} from "./../services/month-service"
import {MonthItemRenderer} from "./month-item-renderer"
import {MonthModel} from "./../services/month-model"
import {MonthDetails} from "./month-details";

@Component({
    selector: 'month-list',
    directives: [MonthItemRenderer, MonthDetails],
    template: `<div>
        <ul>
            <!--'*' this is directive which going to change element itself-->
            <li *ngFor="#month of monthService.months"
                [class.selected]="month === selectedMonth"
                (click)="onSelect(month)">
                    <month-item-renderer
                    [month]="month"
                    (toggle)="monthService.toggleMonthStatus($event)"
                    ></month-item-renderer>
            </li>
        </ul>
        <month-details [month]="selectedMonth"></month-details>
    </div>`
})

export class MonthList {
    @Input() status;
    selectedMonth: MonthModel;
    onSelect(month: MonthModel) { this.selectedMonth = month; }
    constructor(public monthService:MonthService){}
}