import {Component, Input} from "angular2/core";
import {MonthService} from "./../services/month-service"
import {MonthModel} from "./../services/month-model"

@Component({
    selector: 'month-details',
    template: `
    <div *ngIf="month">
        <h2>{{month.title}} details!</h2>
        <div><label>status: </label>{{month.status}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="month.title" placeholder="name"/>
        </div>
    </div>`
})

export class MonthDetails {
    @Input()
    month:MonthModel;
}
