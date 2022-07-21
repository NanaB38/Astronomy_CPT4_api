const express = require('express');
const cors = require('cors');
const db = require('./db');
// const connexion = require('./db');
const app = express();

app.use(express.json());
app.use(cors());

// GET THE FULL LIST OF PLANETS



// GET ONE PLANET BY ID

// TO CREATE A NEW PLANET POST

// UPDATE A PLANET POST

// DELETE A POST

module.exports.app = app;
