import {PropertyNameFormatter, PropertyNameData, culture, country} from "../contract";
import {formatter, BaseFormatter} from '../base';


@formatter("PropertyNameFormatter", "CA")
export default class PropertyNameFormatterCanImpl extends BaseFormatter implements PropertyNameFormatter{
    constructor(culture:culture, country:country){
        super(culture, country);
    }
    format(data:PropertyNameData){
        return `PropertyNameFormatter:  ${data.propertyGroupName} - ${data.propertyName} - ${this._country}`;
    }
}