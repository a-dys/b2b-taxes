import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'calcTax'})
export class CalcTax implements PipeTransform {
    transform(value:number) : number {
        var tax = value * 0.18;
        return tax;
    }
}