import {bootstrap}    from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {MonthInput} from "./month/components/month-input";
import {MonthService} from "./month/services/month-service";
import {MonthList} from "./month/components/month-list";

@Component({
    selector: 'app',
    directives: [MonthInput, MonthList],
    template: `<div>
    <h1>B2B taxes</h1>
    <month-input></month-input>
    <month-list
    [status]="status"
    [term]="term"
    ></month-list>
    </div>`
})
class App{}

bootstrap(<any>App, [MonthService]);
