import FormatterFactory from "./formatters";
import chalk from 'chalk';


let propertyNameUSFormat = FormatterFactory.PropertyNameFormatter("en-US", "US").format({
    propertyGroupName: "Hillwood",
    propertyName: "Institute"
});

let propertyNameCAFormat = FormatterFactory.PropertyNameFormatter("en-CA", "CA").format({
    propertyGroupName: "Hillwood",
    propertyName: "Institute"
});

console.log(chalk.blue.bold(propertyNameUSFormat));
console.log(chalk.blue.bold(propertyNameCAFormat));

