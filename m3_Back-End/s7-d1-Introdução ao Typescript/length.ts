import readLine from 'readline-sync';



const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function UnitConversor(value: number, baseUnit: string, convertUnit: string) {
  const indexBase = units.indexOf(baseUnit);
  const indexConvert = units.indexOf(convertUnit)

  return value * Math.pow(10, indexConvert - indexBase)
}

function exec() {
  const inputValue = readLine.questionInt("Digite o valor a ser convertido: \n")

  const chooseUnit = readLine.keyInSelect(units, 'Escolha uma unidade base')
  console.log(chooseUnit);

  const chooseUnitToConvert = readLine.keyInSelect(units, 'Escolha uma unidade para conversão')

  const baseUnit = units[chooseUnit];
  const convertUnit = units[chooseUnitToConvert]

  const result = UnitConversor(inputValue, baseUnit, convertUnit);

  const message = `O valor de ${inputValue}${baseUnit} em ${convertUnit} é de: ${result}${convertUnit} `;

  console.log(message);

};
exec();