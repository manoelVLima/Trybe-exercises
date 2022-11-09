
const express = require('express');

const app = express();
const cacauTrybe = require('./cacauTrybe');

app.get('/chocolates', async (_req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (_req,res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({totalChocolates: chocolates.length})
});

app.get('/chocolates/search', async (req,res) => {
  const {name} = req.query;
  const chocolates = await cacauTrybe.getAllChocolates();
  const chocolatesByName = chocolates.filter((chocolate) => chocolate.name.includes(name))

  if(!chocolatesByName.length) res.status(404).json([])
  
  res.status(200).json(chocolatesByName);
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  // Usamos o Number para converter o id em um inteiro
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json({ chocolate });
});


app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});


app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  const updatedChocolate = await cacauTrybe.updateChocolate(Number(id), { name, brandId });

  if (updatedChocolate) return res.status(200).json({ chocolate: updatedChocolate });
  res.status(404).json({ message: 'chocolate not found' });
})

app.listen(3010, () => {
  console.log('Iniciando na porta 3001');
})

module.exports = app;