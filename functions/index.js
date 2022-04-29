const functions = require("firebase-functions");
const express = require("express");
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://HenriA:HenrisPassword@quizcluster.5oc2z.mongodb.net/Quiz-Capstone?retryWrites=true&w=majority")
const app = express();
const path = require("path");
const { MongoClient, Db } = require("mongodb");

const uri =
    //"mongodb+srv://cortezB:cortezPassword@quizcluster.5oc2z.mongodb.net/Quiz-Capstone?retryWrites=true&w=majority"
    "mongodb+srv://HenriA:HenrisPassword@quizcluster.5oc2z.mongodb.net/Quiz-Capstone?retryWrites=true&w=majority";
const client = new MongoClient(uri);
app.use(express.static(path.join(__dirname, "static")));
//test
app.use =(bodyParser.json());
app.use =(bodyParser.urlencoded({extended: true}));

//app.use =(express.urlencoded({extended: true}));
//app.use =(express.json()); // To parse the incoming request with JSON payloads
//end test
async function main() {
    try {
        // Will connect to database as soon as user enters the site.
        await client.connect();

    } catch (e) {
        console.error(e);
    } finally {
        //await client.close();
    }
}

// console logging the databases inside of the MongoDB database.
async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach((db) => {
        console.log(`- ${db.name}`);
    });
}

// CREATE (create listing)
async function createListing(client, newListing) {
    const result = await client
        .db("Quiz-Capstone")
        .collection("Quiz")
        .insertOne(newListing);

    console.log(
        `New listing created with the following id: ${result.insertedId}`
    );
}

// CREATE (create listing)
async function createUserListing(client, newListing){
    const result = await client.db("Quiz-Capstone").collection("Student").insertOne(newListing);

    console.log(`New listing created with the following id: ${result.insertedId}`);
}

// READ (find listing)
async function findOneDisplayNameByName(client, nameOfEmail){
    const result = await client.db("Quiz-Capstone").collection("Student").findOne({studentEmail:
        nameOfEmail});

    if(result){
        console.log(`Found a listing in the collection with the name '${nameOfEmail}'`);
        console.log(result);
        return result;
    }else {
        console.log(`No listings found with the name '${nameOfEmail}'`);
        //console.log(result);
        return result;
    } 
}

// READ (find listing)
async function findOneListingByName(client, nameOfListing) {
    const result = await client
        .db("Quiz-Capstone")
        .collection("Quiz")
        .findOne({ quizName: nameOfListing });

    if (result) {
        console.log(
            `Found a listing in the collection with the name '${nameOfListing}'`
        );
        return result;
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}

//Query to find a student info based on email
async function findStudent(client, sEmail) {
    const result = await client
        .db("Quiz-Capstone")
        .collection("Student")
        .findOne({ studentEmail: sEmail });

    if (result) {
        return result;
    } else {
        console.log(`No listings found with the name '${sEmail}'`);
    }
}

// calling main and catching for errors if any
main().catch(console.error);

// NODE ROUTES:
app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/static/index.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/static/about.html");
});

app.get("/hello", (req, res) => {
    res.send("Hi there!");
    console.log("OKAY");
});

app.get("/api", (req, res) => {
    res.json({ bongs: "BONG ".repeat(hours) });
});

app.get("/HST01", (req, res) => {
    findOneListingByName(client, "HST01").then(function(result) {
        res.type("application/json");
        res.send(`${JSON.stringify(result)}`);
    });
});

app.get("/SCI01", (req, res) => {
    findOneListingByName(client, "SCI01").then(function(result) {
        res.type("application/json");
        res.send(`${JSON.stringify(result)}`);
    });
});

app.get("/MEC01", (req, res) => {
    findOneListingByName(client, "MEC01").then(function(result) {
        res.type("application/json");
        res.send(`${JSON.stringify(result)}`);
    });
});

app.get("/CIS01", (req, res) => {
    findOneListingByName(client, "CIS01").then(function(result) {
        res.type("application/json");
        res.send(`${JSON.stringify(result)}`);
    });
});

// Create a user route to create user listing in the database
app.get("/user", (req, res) => {
    const user_email = req.query.email;
    const user_display_name = req.query.displayName;
    // Takes in user email and display name to create a document inside the database.
    createUserListing(client, {studentEmail:user_email,display_name:user_display_name});
});

// get the user display name
app.get("/userDisplayName", (req, res) => {
    const user_email = req.query.email;
    findOneDisplayNameByName(client, user_email).then(function(result){
        res.type('application/json');
        res.send(`${JSON.stringify(result)}`);
        
    });
});

//Express route to set up scores table
app.get("/qResults", (req, res) => {
    const user_email = req.query.email;
    console.log(user_email);
    findStudent(client, user_email).then(function(result) {
        res.type("application/json");
        res.send(`${JSON.stringify(result)}`);
    });
});
//test
//var userModel = require('./models/user/user.model.server');
//userModel.createUser({
    //    username:'cortez', password: 'cortez'
    //});
    //var userService = require('./models/services/user.service.server');
    //userService(app);
    var userService = require('./models/services/question.service.server');
    userService(app);
    //testnp
// https request
exports.app = functions.https.onRequest(app);

