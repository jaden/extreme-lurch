require('dotenv').config();

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello world')
})

app.get('/foo', function (req, res) {
  res.send({ a: 'foo', b: 'bar' })
})

const port = Number(process.env.PORT) || 3000;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
