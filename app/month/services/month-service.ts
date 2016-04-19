import {Injectable} from "angular2/core";
import {MonthModel} from "./month-model"

@Injectable()
export class MonthService {
    months:MonthModel[] = [
        new MonthModel("styczeń"),
        new MonthModel("luty","closed"),
        new MonthModel("marzec"),
        new MonthModel("kwiecień")
    ];

    addMonth(month:MonthModel){
        this.months = [...this.months, month];
    }

    toggleMonthStatus(month:MonthModel) {
        month.toggle();
        const i = this.months.indexOf(month);
        this.months = [
            ...this.months.slice(0, i),
            month,
            ...this.months.slice(i + 1)
        ];
    }

    showMonthDetails(month:MonthModel) {
        month.show();
    }
}
