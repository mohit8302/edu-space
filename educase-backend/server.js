const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'EduSpace',
  password: 'password',
  port: 5432,
});

// API routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Schools API
app.get('/api/schools', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM schools');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.post('/api/schools', async (req, res) => {
  const { name, about, username, address, city, postcode, contact_number, email, country } = req.body;
  console.log('Received data:', req.body); // Log the received data
  try {
    const result = await pool.query(
      'INSERT INTO schools (name, about, username, address, city, postcode, contact_number, email, country) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [name, about, username, address, city, postcode, contact_number, email, country]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.delete('/api/schools/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query('DELETE FROM schools WHERE id = $1 RETURNING *', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});