'use strict';

const express = require('express');
const fetch = require('node-fetch');

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

const app = express();
app.get('/', async (req, res) => {
  const responseMs1 = await fetch(process.env.MS1);
  const responseMs2 = await fetch(process.env.MS2);
  const dataMs1 = await responseMs1.json();
  const dataMs2 = await responseMs2.json();
  res.send(`${dataMs1.data}${dataMs2.data}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);