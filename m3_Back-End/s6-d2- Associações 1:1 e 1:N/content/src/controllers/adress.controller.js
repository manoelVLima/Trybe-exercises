const adressService = require('../services/address.service');


const getAll = async (_req, res) => {
  try {
    const addresses = await adressService.getAll();

    if(!addresses) return res.statuss(400).json({message: 'Endereços não encontrados'});

    res.status(200).json(addresses);

  } catch (error) {
    console.log(error.message);
    return res.status(500).json({message: 'ERRO DE REQUISIÇÃO'});
  }
};

module.exports = {
  getAll
}