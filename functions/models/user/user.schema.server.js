var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    //updated: { type: Date, default: Date.now() },
    userId: mongoose.Schema.Types.ObjectId
}, {collection: 'user'});

module.exports = userSchema;