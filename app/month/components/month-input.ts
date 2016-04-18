import {Component} from "angular2/core";
import {MonthService} from "./../services/month-service"
import {MonthModel} from "./../services/month-model"

@Component({
    selector: 'month-input',
    directives: [MonthInput],
    template:  `<div>
    <form (submit)="onSubmit()">
    <input type="text" [(ngModel)]="monthModel.title">
    </form>
    </div>`
})

export class MonthInput {
    monthModel:MonthModel = new MonthModel();
    constructor(public monthService:MonthService) {
    }

    onSubmit(value){
        this.monthService.addMonth(this.monthModel);
        console.log(this.monthService.months);
        this.monthModel = new MonthModel();
    }
}