const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV||'development']);


app.get('/', (req, res) => {
  res.send('App up and running')
})

app.get('/pets', (req, res) => {
  knex('pet')
    .select('*')
    .then(pets => {
      var petNames = pets.map(pet => pet.name)
      res.json(petNames);
    })
})

app.listen(PORT, () => {
    console.log(`Knex and Express apps are successfully running on port ${PORT}`)
})