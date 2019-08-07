const express = require('express');
const pass = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on the ${PORT}`));