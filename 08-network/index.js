const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

const connectString = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017';
const client = new MongoClient(connectString);
const db = client.db('example');

app.get('/', (req, res) => res.json({ message: 'Hello Express ✋'}));

app.get('/api/numbers/new', async (req, res) => {
  const random = Math.random();

  await db.collection('myCollection').insertOne({ value: random });

  return res.json({ status: 'success', value: random });
});

app.get('/api/numbers', async (req, res) => {
  const numbers = await db.collection('myCollection').find().toArray();

  res.json({
    numbers: numbers
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
