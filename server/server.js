const express = require("express");
const routes = require("./routes.js");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport');
require('../config/passport')(passport);

const db = require('../config/key').mongoURI;
mongoose.connect(db)
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(passport.initialize())
    .use("/api", routes);
    

app.listen(5000, (e) => {
    if (e) {
        console.log(e);
    } else {
        console.log("connected successfully")
    }
})