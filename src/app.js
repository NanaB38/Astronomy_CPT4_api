const express = require('express');
const cors = require('cors');
const db = require('./db');
// const connexion = require('./db');
const app = express();

app.use(express.json());
app.use(cors());

// GET THE FULL LIST OF PLANETS
app.get('/planets', async (req, res) => {
  try {
    const [planets] = await db.promise().query('SELECT * FROM planets');
    res.send(planets);
  } catch (err) {
    console.error(err);
    res.status(500).send('something wrong happened');
  }
});

// GET ONE PLANET BY ID

// TO CREATE A NEW PLANET POST

// UPDATE A PLANET POST

// DELETE A POST

module.exports.app = app;
