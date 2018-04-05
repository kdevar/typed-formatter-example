/*
import 'reflect-metadata';
import {IFormatters, culture, country} from './contract';
import {isTargetFormatter} from './base';
import * as f from './impl';

export type IFactory<T> = {
    [P in keyof T]: (culture:culture, country:country) =>  T[P]
}

export type FormatterFactory = IFactory<IFormatters>

function getFormatter<K extends keyof IFormatters>(i:K):any{
    return (culture:culture, country:country) => {
        let formatter:any;
        Object.keys(f).forEach(name => {            
            if(isTargetFormatter(f[name], i, country)){
                formatter = f[name];                
            }
        });
        if(!formatter){
            throw new Error(`Formatter: ${i} has not been implemented`);
        }
        return new formatter(culture, country);                
    }   
}


const  formatterFactory: FormatterFactory = {
    PropertyNameFormatter: getFormatter("PropertyNameFormatter")    
}

export default formatterFactory;
*/

import 'reflect-metadata';
import {IFormatters, culture, country} from './contract';
import {isTargetFormatter, getFormatterInterface} from './base';
import * as f from './impl';

export type IFactory<T> = {
    [P in keyof T]: (culture:culture, country:country) =>  T[P]
}

export type FormatterFactory = IFactory<IFormatters>

function getFormatter<K extends keyof IFormatters>(i:K):any{
    return (culture:culture, country:country) => {
        let formatter:any;
        Object.keys(f).forEach(name => {            
            if(isTargetFormatter(f[name], i, country)){
                formatter = f[name];                
            }
        });
        if(!formatter){
            throw new Error(`Formatter ${i} has not been implemented`);
        }
        return new formatter(culture, country);                
    }   
}

function createFormatterFactory():FormatterFactory{
    let factory:any = {};
    Object.keys(f).forEach(name => {
        const implementationOf = getFormatterInterface(f[name]);
        factory[implementationOf] = getFormatter(implementationOf);
    });    
    return factory;
}

const factory = createFormatterFactory();

export default factory;
