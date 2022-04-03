const functions = require("firebase-functions");
const express = require("express");
const app = express();
//const router = express.Router();
//const path = require("path");
/*
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/test.html"));
});
*/
app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/index.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/static/about.html");
});

app.get("/hello", (req, res) => {
    res.send("Hi there!");
});

/*
app.get("/hello", (req, res) => {
    res.send("hello");
});
*/
app.get("/api", (req, res) => {
    res.json({ bongs: "BONG ".repeat(hours) });
});

exports.app = functions.https.onRequest(app);