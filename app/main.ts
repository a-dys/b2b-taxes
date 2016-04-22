import {bootstrap}    from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {MonthInput} from "./month/components/month-input";
import {MonthService} from "./month/services/month-service";
import {MonthList} from "./month/components/month-list";
import {TaxInfo} from "./tax/components/tax-info"

@Component({
    selector: 'app',
    directives: [TaxInfo, MonthInput, MonthList],
    template: `<div>
    <h1>B2B taxes</h1>
    <tax-info></tax-info>
    <month-input></month-input>
    <month-list
    [status]="status"
    [term]="term"
    ></month-list>
    </div>`
})
class App{}

bootstrap(<any>App, [MonthService]);
