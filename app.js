import express from 'express';
import pool from './db.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT NOW() AS now');
    res.send(`Hello World! Server time: ${rows[0].now}`);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).send('Error connecting to database');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
