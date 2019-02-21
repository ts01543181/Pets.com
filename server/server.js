const express = require("express");
const routes = require("./routes.js");

const app = express();

app.use("/api", routes);

app.listen(5000, (e) => {
    if (e) {
        console.log(e);
    } else {
        console.log("connected successfully")
    }
})