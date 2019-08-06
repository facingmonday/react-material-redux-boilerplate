const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config()

const app = express();

app.use(morgan());
app.use(cors({
  origin: ['http://localhost:8080'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.get('/users/me', (req, res) => {
  if (req.headers.authorization) {
    return res.status(200).json({
      name: 'Test User',
      email: 'test@test.com',
    });
  }
  return res.sendStatus(401);
});

app.get('/auth/local', (req, res) => res.json({
  name: 'Test User',
  email: 'test@test.com',
  token: 'dfhafoiaudfalksfhalkdf',
}));

app.post('/auth/local', (req, res) => res.json({
  name: 'Test User',
  email: 'test@test.com',
  token: 'dfhafoiaudfalksfhalkdf',
}));

app.get('/products', (req, res) => res.status(200).json({
  stats: 2,
  results: [
    {
      id: 1,
      name: "My First Product",
      price: 25.99,
    },
    {
      id: 2,
      name: "Another Product",
      price: 12.50,
    },
  ],
}));

app.get('/api/users', (req, res) => 
  //return res.sendStatus(500);
  res.status(200).json({
    stats: 1,
    results: [
      {
        _id: '1239801238',
        role: 'admin',
        name: 'Test User',
        email: 'test@test.com',
      },
    ],
  })
);

app.listen(process.env.SERVER_PORT, () => {  
  console.log(`Dev API is running on port ${process.env.SERVER_PORT}...`);
});

module.exports = app;
