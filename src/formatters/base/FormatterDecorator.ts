import {IFormatters} from '../contract';
import {country} from './BaseFormatter';

export const formatterNameMetadataKeyName = "formatterName";
export const formatterNameMetadataCountryName = "formatterCountry";

export function formatter<K extends keyof IFormatters>(name:K, country:country){    
    return target => {
        Reflect.defineMetadata(formatterNameMetadataKeyName, name, target);
        Reflect.defineMetadata(formatterNameMetadataCountryName, country, target);
    }    
}

export function isTargetFormatter(target, interfce, country){    
    return interfce === getFormatterInterface(target) && country === getFormatterCountry(target); 
}

export function getFormatterInterface(target){
    return Reflect.getMetadata(formatterNameMetadataKeyName, target);
}

export function getFormatterCountry(target){
    return Reflect.getMetadata(formatterNameMetadataCountryName, target);
}