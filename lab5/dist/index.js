"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', routes_1.default);
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('kittikan aiadhai 306');
});
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
// http://localhost:3000/api/products
