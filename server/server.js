const express = require('express');
const path = require('path');

const PORT = '3000';
const app = express();

app.get('/', (req, res) => {

  res.send('<h1>open your ice</h1>')

}).listen(PORT, () => {
  console.log(`server is run go on port ${PORT}`)
})