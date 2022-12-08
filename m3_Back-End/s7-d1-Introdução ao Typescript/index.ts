import convertFunction from "./area";
const value = 1
const base = 'km2';
const convert = 'm2';

console.log(`A conversão de ${value}${base} para ${convert} é igual a:`, convertFunction(value, base, convert))