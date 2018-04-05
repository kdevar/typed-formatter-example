import FormatterFactory from "./formatters";
import chalk from 'chalk';


let propertyNameUSFormat = FormatterFactory.PropertyNameFormatter("en-US", "US").format({
    propertyGroupName: "test",
    propertyName: "super"
});

let propertyNameCAFormat = FormatterFactory.PropertyNameFormatter("en-CA", "CA").format({
    propertyGroupName: "test",
    propertyName: "super"
});

console.log(chalk.blue.bold(propertyNameUSFormat));
console.log(chalk.blue.bold(propertyNameCAFormat));

