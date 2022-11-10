const express = require('express');

const app = express();
const peopleRouter = require('./routes/peopleRoutes');

app.use(express.json());
app.use('/people',peopleRouter);

module.exports = app;