import {Component, Input} from "angular2/core";
import {MonthService} from "./../services/month-service"
import {MonthModel} from "./../services/month-model"
import {CalcTax} from './../pipes/calc-tax-pipe';
import {TaxInfoModel} from "./../../tax/services/tax-info-model"

@Component({
    selector: 'month-details',
    pipes: [CalcTax],
    template: `
    <div *ngIf="month">
        <h2>{{month.title}} details!</h2>
        <div><label>status: </label>{{month.status}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="month.title" placeholder="name"/>
        </div>
        <div>
            <label>income: </label>
            <input [(ngModel)]="month.income" placeholder="0"/>
        </div>
        <div><label>tax: </label>{{month.income | calcTax }}</div>
    </div>`
})

export class MonthDetails {
    @Input()
    month:MonthModel;
}
