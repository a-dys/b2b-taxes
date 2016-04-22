export class MonthModel {

    public selectedMonth:MonthModel;

    constructor (
        public title:string = "",
        public status:string = "opened"
    ){}

    toggle():void{
        this.status =
            this.status == "opened"
            ? "closed"
            : "opened";
    }
};