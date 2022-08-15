const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;
const directoryPath = path.join(__dirname, '../public')
// const jsonParser = bodyParser.json();

app.use(express.json());

app.use(express.static(directoryPath));

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}...`)
});