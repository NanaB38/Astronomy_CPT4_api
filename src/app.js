const express = require('express');
const cors = require('cors');
const db = require('./db');
const Joi = require('joi');
const connection = require('./db');
const app = express();

app.use(express.json());
app.use(cors());

// const port = process.env.PORT || 3000;

const middleware1 = (req, res, next) => {
  console.log('doing stuff in middleware 1');
  // ajouter next pour ne pas faire tourner le serveur en continu
  next();
};

app.use(middleware1);

// TO GET ALL THE ALBUMS

app.get('/albums', async (req, res) => {
  try {
    const [album] = await db.promise().query('SELECT * FROM album');
    res.send(album);
  } catch (err) {
    console.error(err);
    res.status(500).send('something wrong happened');
  }
});

module.exports.app = app;
