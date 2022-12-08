"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function UnitConversor(value, baseUnit, convertUnit) {
    const indexBase = units.indexOf(baseUnit);
    const indexConvert = units.indexOf(convertUnit);
    return value * Math.pow(10, indexConvert - indexBase);
}
function exec() {
    const inputValue = readline_sync_1.default.questionInt("Digite o valor a ser convertido: \n");
    const chooseUnit = readline_sync_1.default.keyInSelect(units, 'Escolha uma unidade base');
    console.log(chooseUnit);
    const chooseUnitToConvert = readline_sync_1.default.keyInSelect(units, 'Escolha uma unidade para conversão');
    const baseUnit = units[chooseUnit];
    const convertUnit = units[chooseUnitToConvert];
    const result = UnitConversor(inputValue, baseUnit, convertUnit);
    const message = `O valor de ${inputValue}${baseUnit} em ${convertUnit} é de: ${result}${convertUnit} `;
    console.log(message);
}
;
exec();
