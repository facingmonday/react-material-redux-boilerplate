const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(
  cors({
    origin: ['http://localhost:8080'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
);

/**
 * Authentication
 */
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

/**
 * Users
 */
app.get('/api/users', (req, res) =>
  res.status(200).json({
    offset: 0,
    limit: 100,
    sort: [
      {
        field: 'email',
        direction: 'ASC',
      },
    ],
    searchTerm: 'yahoo',
    filters: [
      {
        field: 'name',
        value: 'jay',
      },
    ],
    total: 29823,
    results: [
      {
        id: '1239801238',
        role: 'admin',
        name: 'Test User',
        email: 'test@test.com',
      },
    ],
  }),
);
app.get('/api/users/me', (req, res) => {
  if (req.headers.authorization) {
    return res.status(200).json({
      name: 'Test User',
      email: 'test@test.com',
    });
  }
  return res.sendStatus(401);
});
app.get('/api/users/:id', (req, res) => {
  res.status(200).json({
    id: '1239801238',
    role: 'admin',
    name: 'Test User',
    email: 'test@test.com',
  });
});
app.post('/api/users', (req, res) => {
  res.sendStatus(401);
});
app.put('/api/users/:id', (req, res) => res.sendStatus(204));
app.delete('/api/users/:id', (req, res) => res.sendStatus(202));
app.post('/api/users/register', (req, res) => res.sendStatus(201));

/** Add More Routes here using mc_server_api */

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Dev API is running on port ${process.env.SERVER_PORT}...`); // eslint-disable-line
});

module.exports = app;
