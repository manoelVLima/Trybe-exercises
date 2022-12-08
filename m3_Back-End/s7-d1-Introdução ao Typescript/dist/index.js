"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const area_1 = __importDefault(require("./area"));
const value = 1;
const base = 'km2';
const convert = 'm2';
console.log(`A conversão de ${value}${base} para ${convert} é igual a:`, (0, area_1.default)(value, base, convert));
