// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, GitHub Actions! from me Chhunly Un');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
