const functions = require("firebase-functions");
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/test.html");
});

app.get("/api", (req, res) => {
    res.json({ bongs: "BONG ".repeat(hours) });
});


exports.app = functions.https.onRequest(app);