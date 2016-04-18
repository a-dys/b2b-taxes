import {Component, Input} from "angular2/core"
import {MonthService} from "./../services/month-service"
import {MonthItemRenderer} from "./month-item-renderer"

@Component({
    selector: 'month-list',
    directives: [MonthItemRenderer],
    template: `<div>
        <ul>
            <!--'*' this is directive which going to change element itself-->
            <li *ngFor="#month of monthService.months">
                <month-item-renderer
                [month]="month"
                (toggle)="monthService.toggleMonthStatus($event)"
                ></month-item-renderer>
            </li>
        </ul>
    </div>`
})

export class MonthList {
    @Input() status;
    constructor(public monthService:MonthService){}
}