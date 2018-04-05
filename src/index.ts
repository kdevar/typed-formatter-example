import FormatterFactory from "./formatters";

let aUs = FormatterFactory.PropertyNameFormatter("en-CA", "US").format({
    propertyGroupName: "test",
    propertyName: "super"
});

let aCa = FormatterFactory.PropertyNameFormatter("en-CA", "CA").format({
    propertyGroupName: "test",
    propertyName: "super"
});

console.log(aUs);
console.log(aCa);

