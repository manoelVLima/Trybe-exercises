// src/services/employee.service.js

const { Address, Employee } = require('../models/');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {
  // const employee = await Employee.findOne({
  //     where: { id },
  //     include: [{ model: Address, as: 'addresses', attributes: { exclude: [ 'number' ] } }],
  //   });
  // return employee; METODO EAGER LOADING


    const employee = await Employee.findOne({
      where: { id },
    });
    return employee;
}



module.exports = { 
  getAll,
  getById
};