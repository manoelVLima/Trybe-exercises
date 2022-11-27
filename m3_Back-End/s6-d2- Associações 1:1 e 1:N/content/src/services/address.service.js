  const { Employee, Address } = require('../models');;

  const getAll = async () => {
    const adresses = await Address.findAll({
      include: { model: Employee, as: 'employees' }
    });

    return adresses;
  };

const getAllByEmployeeId = async (employeeId) => {
  const addresses = await Address.findAll({ where: { employeeId } });

  return addresses;
};

  module.exports = {
    getAll,
    getAllByEmployeeId
  }