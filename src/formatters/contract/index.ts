export interface PropertyNameData {
    propertyName?: string;
    propertyGroupName?: string;
}

export interface PropertyNameFormatter{
    format(data:PropertyNameData):string
}

export interface IFormatters{
    PropertyNameFormatter: PropertyNameFormatter
}
