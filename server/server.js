const express = require("express");
const routes = require("./routes.js");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const db = require('../config/key').mongoURI;
const app = express();

mongoose
    .connect(db)
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use("/api", routes);

app.listen(5000, (e) => {
    if (e) {
        console.log(e);
    } else {
        console.log("connected successfully")
    }
})