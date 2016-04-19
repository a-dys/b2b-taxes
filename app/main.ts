import {bootstrap}    from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {MonthInput} from "./month/components/month-input";
import {MonthService} from "./month/services/month-service";
import {MonthList} from "./month/components/month-list";
import {MonthDetails} from "./month/components/month-details";

@Component({
    selector: 'app',
    directives: [MonthInput, MonthList, MonthDetails],
    template: `<div>
    <h1>B2B taxes</h1>
    <month-input></month-input>
    <month-list
    [status]="status"
    [term]="term"
    ></month-list>
    <month-details [month]="selectedMonth"></month-details>
    </div>`
})
class App{}

bootstrap(<any>App, [MonthService]);
