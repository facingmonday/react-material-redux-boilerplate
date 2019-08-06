const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(morgan());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ['http://localhost:8080'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
);

app.get('/users/me', (req, res) => {
  if (req.headers.authorization) {
    return res.status(200).json({
      name: 'Test User',
      email: 'test@test.com',
    });
  }
  return res.sendStatus(401);
});

app.get('/auth/local', (req, res) =>
  res.json({
    name: 'Test User',
    email: 'test@test.com',
    token: 'dfhafoiaudfalksfhalkdf',
  }),
);

app.post('/auth/local', (req, res) =>
  res.json({
    name: 'Test User',
    email: 'test@test.com',
    token: 'dfhafoiaudfalksfhalkdf',
  }),
);

app.get('/products', (req, res) =>
  res.status(200).json({
    stats: 2,
    results: [
      {
        id: 1,
        name: 'My First Product',
        price: 25.99,
      },
      {
        id: 2,
        name: 'Another Product',
        price: 12.5,
      },
    ],
  }),
);

app.get('/api/users', (req, res) => {
  console.log('GET');
  return res.status(200).json({
    stats: 1,
    results: [
      {
        id: '1239801238',
        role: 'admin',
        name: 'Test User',
        email: 'test@test.com',
      },
    ],
  });
});

app.get('/api/users/:id', (req, res) => {
  console.log('GET: ', req.params.id);
  res.status(200).json({
    id: '1239801238',
    role: 'admin',
    name: 'Test User',
    email: 'test@test.com',
  });
});

app.post('/api/users', (req, res) => {
  console.log('POST: ', req.query);
  res.status(200).json({
    stats: 1,
    results: [
      {
        id: '1239801238',
        role: 'admin',
        name: 'Test User',
        email: 'test@test.com',
      },
    ],
  });
});

app.put('/api/users/:id', (req, res) => {
  console.log('PUT: ', req.query);
  return res.status(200).json({
    stats: 1,
    results: [
      {
        id: '1239801238',
        role: 'admin',
        name: 'Test User',
        email: 'test@test.com',
      },
    ],
  });
});

app.delete('/api/users/:id', (req, res) => {
  console.log('DELETE: ', req.params.id);
  return res.status(200).json({
    stats: 1,
    results: [
      {
        id: '1239801238',
        role: 'admin',
        name: 'Test User',
        email: 'test@test.com',
      },
    ],
  });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Dev API is running on port ${process.env.SERVER_PORT}...`); // eslint-disable-line
});

module.exports = app;
