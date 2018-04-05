export type culture = 'en-US' | 'en-CA' | 'en-GB';
export type country = "US" | "CA" | "GB";
export class BaseFormatter{
    _culture:culture;
    _country:country;
    constructor(culture:culture, country:country){
        this._culture = culture;
        this._country = country;
    }
}