import {PropertyNameFormatter, PropertyNameData} from "../contract"
import {formatter, BaseFormatter, country, culture} from '../base';

@formatter("PropertyNameFormatter", "US")
export default class PropertyNameFormatterImpl extends BaseFormatter implements PropertyNameFormatter{
    constructor(culture:culture, country:country){
        super(culture, country)
    }
    format(data:PropertyNameData){
        return `PropertyNameFormatter:  ${data.propertyGroupName} - ${data.propertyName} - ${this._country}`;
    }
}