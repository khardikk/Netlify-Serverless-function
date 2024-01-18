const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.use(express.json());

app.get('/.netlify/functions/generateButtons', (req, res) => {
  console.log('GET request received at generateButtons function');
  res.sendStatus(200);
});


app.post('/.netlify/functions/generateButtons', (req, res) => {

  const numberOfButtons = req.body.numberOfButtons || 0;
  console.log('Request payload:', req.body);
  console.log('numberOfButtons:', numberOfButtons);

  const buttonsArray = Array.from({ length: numberOfButtons }, (_, index) => index + 1);
  const responseBody = {
    buttons: buttonsArray,
  };
  res.status(200).json(responseBody);
});

app.use((req, res) => {
  res.sendStatus(400);
});

module.exports.handler = serverless(app);

