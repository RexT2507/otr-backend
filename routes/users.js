const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'otrDatabase';

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

mongoose.connect(`${url}/${dbName}`, options);

const database = mongoose.connection;

database.once('open', _ => {
  console.log(`Connexion MongoDB : ${url}`);
  console.log(`Database : ${dbName}`);
});

database.on('error', err => {
  console.error('Erreur de connexion : ', err);
});

/* GET users listing. */
router.get('/', (req, res) => {
  res.send(`
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Route user</a>
  </nav>
  <div class="alert alert-dark" role="alert">
      <a>Connexion MongoDB : ${url}</a>
      <br>
      <a>Database : ${dbName}</a>
  </div>
  `);
});

module.exports = router;
