const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addTurno(obj,key,value){
  obj[key] = value;
}
addTurno(lesson2,'turno','noite')
// console.log(lesson2);

function listKeys(obj){
  const object = Object.keys(obj);

  return object;
}
// console.log(listKeys(lesson1));

const objLength = (obj) => Object.keys(obj).length;
// console.log(objLength(lesson1));

const objValues = (obj) => Object.values(obj);
// console.log(objValues(lesson3));

const allLesson = Object.assign({},{lesson1,lesson2,lesson3});
// console.log(allLesson);

const numberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for( let index in array){
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
}
// console.log(numberOfStudents(allLesson));

function keyValue(obj,key){
  const value = Object.values(obj);

  return value[key]
}
// console.log(keyValue(lesson1,2));

const verifyKeyValue = (obj,key,value) => {
  const array = Object.entries(obj);
  let equal = false
  for(index in array){
    if(array[index][0] === key && array[index][1] === value) equal = true;
  } 
  return equal;
}
// console.log(verifyKeyValue(lesson1,'turno','manhã'))

// BÔNUS

const getNumberOfMathStudents = (obj) =>{
  const array = Object.keys(obj);
  let total = 0;
  for(let index in array){
    if(obj[array[index]].materia === 'Matemática'){
      total += obj[array[index]].numeroEstudantes;
    } 
  }
  return total;
}
console.log(getNumberOfMathStudents(allLesson))