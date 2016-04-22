export class MonthModel {

    public selectedMonth:MonthModel;

    constructor (
        public title:string = "",
        public status:string = "opened",
        public income:number = 0,
        public tax:number = 0
    ){}

    toggle():void{
        this.status =
            this.status == "opened"
            ? "closed"
            : "opened";
    }
};