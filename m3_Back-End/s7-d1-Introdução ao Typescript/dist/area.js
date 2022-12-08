"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const units = ['km2', 'hm2', 'dam2', 'm2', 'dm2', 'cm2', 'mm2'];
function convert(value, unitBase, unitConvert) {
    const baseIndex = units.indexOf(unitBase);
    const convertIndex = units.indexOf(unitConvert);
    return value * Math.pow(100, convertIndex - baseIndex);
}
exports.default = convert;
