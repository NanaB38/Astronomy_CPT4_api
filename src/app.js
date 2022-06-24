const express = require('express');
const cors = require('cors');
const db = require('./db');
const Joi = require('joi');
const connection = require('./db');
const app = express();
app.use(express.json());
app.use(cors());
