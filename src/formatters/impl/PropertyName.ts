import {PropertyNameFormatter, PropertyNameData, culture, country} from "../contract"
import {formatter, BaseFormatter} from '../base';

@formatter("PropertyNameFormatter", "US")
export default class PropertyNameFormatterImpl extends BaseFormatter implements PropertyNameFormatter{
    constructor(culture:culture, country:country){
        super(culture, country)
    }
    format(data:PropertyNameData){
        return `${data.propertyGroupName} - ${data.propertyName} - ${this._country}`;
    }
}