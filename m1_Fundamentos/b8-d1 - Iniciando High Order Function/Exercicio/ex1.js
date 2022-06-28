const employeeId = (employee) => {
  const id = employee.toLowerCase().replace(' ','_'); // split('' ).join('_');
  return {
    name: employee,
    email: `${id}@trybe.com`
  };
}
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Manoel Vieira'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Thayna Vieira'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Maria Auxiliadora') // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees(employeeId));
