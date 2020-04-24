module.exports = mongoose;
var logger = require("morgan"),
cors = require("cors"),
http = require("http"),
express = require("express"),
bodyParser = require("body-parser"),
mongoose = require('mongoose');

//const mongoose = require("mongoose");
const dbPath = "mongodb+srv://test:ccttestuser@cluster0-ky6dr.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(dbPath, {
    useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", () => {
    console.log("> error occurred from the database");
});
db.once("open", () => {
    console.log("> successfully opened the database");
});

