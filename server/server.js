const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const buildPath = path.join(__dirname, '..', 'build');

app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log('server running on port 4000');
});
