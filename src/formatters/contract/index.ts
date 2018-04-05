export type culture = 'en-US' | 'en-CA' | 'en-GB';
export type country = "US" | "CA" | "GB";


export type PropertyNameData = {
    propertyName?: string;
    propertyGroupName?: string;
}

export interface PropertyNameFormatter{
    format(data:PropertyNameData):string
}

export interface IFormatters{
    PropertyNameFormatter: PropertyNameFormatter
}
