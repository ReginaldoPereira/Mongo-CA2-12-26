module.exports = mongoose;
var logger = require("morgan"),
cors = require("cors"),
http = require("http"),
express = require("express"),
bodyParser = require("body-parser"),
mongoose = require('mongoose');
require('dotenv').config();

//const mongoose = require("mongoose");
const dbPath = (process.env.MONGODB_URL);
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

