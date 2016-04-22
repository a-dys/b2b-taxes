import {Component, Input} from "angular2/core"
import {TaxInfoModel} from "./../services/tax-info-model"

@Component({
    selector: 'tax-info',
    template: `
    <div>
        <div><label>Zus zdrowotny: </label>{{taxInfoModel.zusZdr}}</div>
        <div><label>Zus społeczny: </label>{{taxInfoModel.zusSpol}}</div>
        <div><label>Dochodowy: </label>{{taxInfoModel.dochodowy}}</div>
    </div>
    `
})

export class TaxInfo {
    taxInfoModel:TaxInfoModel = new TaxInfoModel();
}