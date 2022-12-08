const units = ['km2', 'hm2', 'dam2', 'm2', 'dm2', 'cm2', 'mm2'];

export default function convert(value: number, unitBase: string, unitConvert: string) {
  const baseIndex = units.indexOf(unitBase);
  const convertIndex = units.indexOf(unitConvert);

  return value * Math.pow(100, convertIndex - baseIndex);
}