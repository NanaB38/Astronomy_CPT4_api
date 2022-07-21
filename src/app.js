const express = require('express');
const cors = require('cors');
const Joi = require('joi');
const db = require('./db');
const connexion = require('./db');

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
app.get('/planets/:id', async (req, res) => {
  const { id } = req.params;
  connexion
    .promise()
    .query('SELECT * FROM planets WHERE id = ?', [id])
    .then(([results]) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error retrieving the planet from the database');
    });
});

// CREATE A NEW PLANET POST

app.post('/planets', async (req, res) => {
  try {
    const { name, picture, details } = req.body;
    const { error: validationErrors } = Joi.object({
      name: Joi.string().max(255).required(),
      picture: Joi.string().max(255).required(),
      details: Joi.string().max(255).required(),
    }).validate({ name, picture, details }, { abortEarly: false });

    if (validationErrors) {
      return res.status(422).json({ errors: validationErrors.details });
    }
    const [{ insertId }] = await db
      .promise()
      .query('INSERT INTO planets (name, picture, details) VALUES (?, ?, ?)', [
        name,
        picture,
        details,
      ]);
    res.status(201).send({ id: insertId, name, picture, details });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// DELETE A PLANET POST

app.delete('/planets/:id', async (req, res) => {
  const { id } = req.params;
  connexion
    .promise()
    .query('DELETE FROM planets WHERE id = ?', [id])
    .then(() => {
      res.status(200).send('Post has been successfully deleted');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error deleting your planet post');
    });
});

module.exports.app = app;
