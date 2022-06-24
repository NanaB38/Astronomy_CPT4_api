const express = require('express');
const cors = require('cors');
const Joi = require('joi');
const db = require('./db');
const connection = require('./db');
const app = express();

app.use(express.json());
app.use(cors());

// const middleware1 = (req, res, next) => {
//   console.log('doing stuff in middleware 1');
//   next();
// };
// app.use(middleware1);

// TO CREATE A NEW ALBUM

app.post('/album', async (req, res) => {
  try {
    const { title, genre, picture, artist } = req.body;
    const { error: validationErrors } = Joi.object({
      title: Joi.string().max(255).required(),
      genre: Joi.string().max(255).required(),
      picture: Joi.string().max(255).required(),
      artist: Joi.string().max(255).required(),
    }).validate({ title, genre, picture, artist }, { abortEarly: false });

    if (validationErrors) {
      return res.status(422).json({ errors: validationErrors.details });
    }
    const [{ insertId }] = await db
      .promise()
      .query(
        'INSERT INTO album (title, genre, picture, artist) VALUES (?, ?, ?, ?)',
        [title, genre, picture, artist]
      );

    res.status(201).send({ id: insertId, title, genre, picture, artist });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// retrieve the full list of albums

app.get('/album', async (req, res) => {
  try {
    const [album] = await db.promise().query('SELECT * FROM album');
    res.send(album);
  } catch (err) {
    console.error(err);
    res.status(500).send('something wrong happened');
  }
});

// retrieve one album by its ID

app.get('/album/:id', (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update cannot be empty!',
    });
  }
  const albumId = req.params.id;
  connection.query(
    'SELECT * FROM album WHERE id = ?',
    [albumId],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error retrieving album from database');
      } else if (result.length === 0) {
        res.status(404).send('Album not found');
      } else {
        res.json(result[0]);
      }
    }
  );
});

// update an album

app.put('/album/:id', (req, res) => {
  const albumId = req.params.id;
  const albumPropsToUpdate = req.body;
  connection.query(
    'UPDATE album SET ? WHERE id = ?',
    [albumPropsToUpdate, albumId],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error updating an album');
      } else if (result.affectedRows === 0) {
        res.status(404).send(`Album with id ${albumId} not found.`);
      } else {
        res.sendStatus(204);
      }
    }
  );
});

// delete an album
app.delete('/album/:id', (req, res) => {
  const albumId = req.params.id;
  connection.query(
    'DELETE FROM album WHERE id = ?',
    [albumId],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error deleting an album');
      } else {
        res.sendStatus(204);
      }
    }
  );
});

// create a new track
app.post('/track', async (req, res) => {
  try {
    const { title, youtubeUrl, idAlbum } = req.body;
    const { error: validationErrors } = Joi.object({
      title: Joi.string().max(255).required(),
      youtube_url: Joi.string().max(255).required(),
      idAlbum: Joi.string().required(),
    }).validate({ title, youtubeUrl, idAlbum }, { abortEarly: false });

    if (validationErrors) {
      return res.status(422).json({ errors: validationErrors.details });
    }
    const [{ insertId }] = await db
      .promise()
      .query(
        'INSERT INTO track (title, youtubeUrl, idAlbum) VALUES (?, ?, ?)',
        [title, youtubeUrl, idAlbum]
      );

    res.status(201).send({ id: insertId, title, youtubeUrl, idAlbum });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// retrieve the full list of tracks

app.get('/track', async (req, res) => {
  try {
    const [track] = await db.promise().query('SELECT * FROM track');
    res.send(track);
  } catch (err) {
    console.error(err);
    res.status(500).send('something wrong happened');
  }
});

// retrieve one track by its ID

app.get('/track/:id', (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update cannot be empty!',
    });
  }
  const trackId = req.params.id;
  connection.query(
    'SELECT * FROM track WHERE id = ?',
    [trackId],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error retrieving track from database');
      } else if (result.length === 0) {
        res.status(404).send('track is not found');
      } else {
        res.json(result[0]);
      }
    }
  );
});

// retrieve the track list of one album

app.get('/album/:id/track', (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update cannot be empty!',
    });
  }
//   const albumId = req.params.id;
//   connection.query(
//     'SELECT * FROM album WHERE id = ?',
//     [albumId],
//     (err, result) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Error retrieving album from database');
//       } else if (result.length === 0) {
//         res.status(404).send('Album not found');
//       } else {
//         res.json(result[0]);
//       }
//     }
//   );
// });

module.exports.app = app;
