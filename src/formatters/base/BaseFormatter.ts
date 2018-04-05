import {culture, country} from '../contract';
export default class BaseFormatter{
    _culture:culture;
    _country:country;
    constructor(culture:culture, country:country){
        this._culture = culture;
        this._country = country;
    }
}