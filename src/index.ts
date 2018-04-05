import FormatterFactory from "./formatters";

let propertyNameUSFormat = FormatterFactory.PropertyNameFormatter("en-CA", "US").format({
    propertyGroupName: "test",
    propertyName: "super"
});

let propertyNameCAFormat = FormatterFactory.PropertyNameFormatter("en-CA", "CA").format({
    propertyGroupName: "test",
    propertyName: "super"
});

console.log(propertyNameUSFormat);
console.log(propertyNameCAFormat);

