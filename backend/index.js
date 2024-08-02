const connection = require('./config'); // Ensure this file exports a configured MySQL connection
const cors = require('cors'); 
const express = require('express');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

app.post('/signup', (req, res) => {
  const { firstName, lastName, username, city, password } = req.body; // Destructure the request body

  // Ensure firstName and lastName are provided
  if (!firstName || !lastName) {
    return res.status(400).send({ error: 'First name and last name are required' });
  }

  const query = 'INSERT INTO users (firstName, lastName, username, city, password) VALUES (?, ?, ?, ?, ?)';
  const values = [firstName, lastName,username, city, password];
console.log(values)
  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send({ error: 'Database error' });
    }
    res.status(200).send({ message: 'User registered successfully', userId: result.insertId });
  });
});

app.listen(4300, () => {
  console.log('Server running on port 4300');
});
