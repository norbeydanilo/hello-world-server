// app.js
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Node.js and Express!! Norbey :)');
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
