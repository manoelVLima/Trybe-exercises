const fs = require('fs').promises;
const readline = require('readline-sync');

async function characters() {
  try {
    const response = await fs.readFile('./simpsons.json');
    const data = await JSON.parse(response);
    
    data.forEach((char) => console.log(`id do personagem: ${char.id}, nome do personagem: ${char.name}`))
  
  } catch (error) {
    console.log(error);
  }
}

async function characterId(id) {
  const response = await fs.readFile('./simpsons.json');
  const data = await JSON.parse(response);
  const char = new Promise((resolve, reject) => {
    const checkIfIdExists = data.find((char) => char.id === id)

    if(!checkIfIdExists) reject(new Error('id não encontrado'))

    resolve(checkIfIdExists)
  })
  return char;
}

characterId('5')
  .then((result) => console.log(result))
    .catch((error) => console.log(error.message));

async function changeCharacterById(id1,id2) {
  const response = await fs.readFile('./simpsons.json');
  const data = await JSON.parse(response);
  
  const filter = data.filter((char) => char.id !== id1 && char.id !== id2)

  return filter;
}
changeCharacterById('10','6')
  .then((result) => console.log(result));


  async function newSimpsonsFamily() {
    const response = await fs.readFile('./simpsons.json');
    const data = await JSON.parse(response);
    
    const filter = data.filter((char) => Number(char.id) <= 4);


    const newFamily = await fs.writeFile('./simpsonFamily.json', JSON.stringify(filter));

    return newFamily;
  }
  newSimpsonsFamily().then((result) => console.log(result));

  async function addNewSimpson() {
    const response = await fs.readFile('./simpsonFamily.json');
    const data = await JSON.parse(response);
    console.log(data);
    
    const id = readline.question('Qual o id do personagem?');
    const name = readline.question('Qual o nome do personagem?');

    const newSimpsons = fs.writeFile('./simpsonFamily.json',JSON.stringify([...data,{
      id,
      name
    }]))

    return newSimpsons;
  }
  addNewSimpson().then((result) => console.log(result));

  async function changeSimpsons(adcName,removeName) {
    const response = await fs.readFile('./simpsonFamily.json');
    const data = await JSON.parse(response);
    
    const filter = data.filter((char) => char.name !== removeName)
    const ifExists = filter.some((char) => char.name === adcName);
    const filterId = data.filter((char) => char.name === removeName);

    if(ifExists) throw new Error('Personagem já existe');

    filter.push({
      id: filterId[0].id,
      name: adcName,
    })
    
    const readline = await fs.writeFile('./simpsonFamily.json', JSON.stringify(filter))
    return readline;
  }
  changeSimpsons('Maggie Simpson','Nelson Muntz').then((result) => console.log(result))