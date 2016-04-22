import {Component, Input} from "angular2/core"
import {MonthService} from "./../services/month-service"
import {MonthItemRenderer} from "./month-item-renderer"
import {MonthModel} from "./../services/month-model"

@Component({
    selector: 'month-list',
    directives: [MonthItemRenderer],
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

        <div *ngIf="selectedMonth">
          <h2>{{selectedMonth.title}} details!</h2>
          <div><label>id: </label>{{selectedMonth.status}}</div>
          <div>
            <label>name: </label>
            <input [(ngModel)]="selectedMonth.title" placeholder="name"/>
          </div>
        </div>
    </div>`
})

export class MonthList {
    @Input() status;
    selectedMonth: MonthModel;
    onSelect(month: MonthModel) { this.selectedMonth = month; }
    constructor(public monthService:MonthService){}
}