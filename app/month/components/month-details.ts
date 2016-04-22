import {Component} from "angular2/core";
import {MonthService} from "./../services/month-service"
import {MonthModel} from "./../services/month-model"

@Component({
    selector: 'month-details',
    directives: [MonthDetails],
    template: `<div>
            <span>:)</span>
        </div>`
})

export class MonthDetails {
    monthModel:MonthModel = new MonthModel();
    constructor(public monthService:MonthService){}
}
