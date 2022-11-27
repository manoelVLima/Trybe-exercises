// src/app.js

const express = require('express');

const employee = require('./controllers/employee.controller');
const adress = require('./controllers/adress.controller');

const app = express();

app.use(express.json());

app.get('/employees', employee.getAll);

app.get('/employees/:id', employee.getById);

app.get('/addresses', adress.getAll);

module.exports = app;