const express = require('express');
const app = express();
const mockData = require('./public/data.js');


const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};
const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);
app.use(express.static('public'))


app.get('/', (request, response) => {
  response.send('hello world');
});

app.get('/sunsets', (request, response) => {
  response.sendFile('/Users/sabrinamae/Desktop/mod-4/intro-to-express/public/sunset.jpg');
});

app.use((req, res, next) => {
  res.status(404).send("404 NOT FOUND BATMAN!")
})

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

app.get('/json', (request, response) => {
  response.status(200).json(mockData.mockData);
});
