import {PropertyNameFormatter, PropertyNameData} from "../contract";
import {formatter} from '../base';


@formatter("PropertyNameFormatter", "CA")
export default class PropertyNameFormatterCanImpl implements PropertyNameFormatter{
    constructor(){}
    format(data:PropertyNameData){
        return `${data.propertyGroupName} - ${data.propertyName} - CA`;
    }
}