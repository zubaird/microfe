const express = require('express');
const app = express();
const PORT = 3002; 
const { Client } = require('pg');
const cors = require('cors')
require('dotenv').config();

// express static directory
app.use(cors())
app.use(express.static('s2-component/dist'));

// Database connection parameters
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: 'localhost',
  port: 5432, // default PostgreSQL port
  database: process.env.DB_DATABASE,
};

// Create a new PostgreSQL client
const client = new Client(dbConfig);

// Connect to the database
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
    // Execute your database queries here
  })
  .catch(err => console.error('Error connecting to PostgreSQL database', err))

app.get('/api/students', (req, res) => {
  
  client.query('SELECT * FROM student')
  .then(result => {
    const rows = result.rows;
    console.log(rows);
    res.json(rows);
  })
  .catch(err => console.error('Error executing query', err));

});

// listen on port
app.listen(PORT, () => {
    // 3000 is the default port
    console.log(`Example app listening on port ${PORT}!`);
  }
);