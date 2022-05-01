var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    studentEmail: String,
    password: String,
    firstName: String,
    lastName: String,
    displayName: String,
    updated: { type: Date, default: Date.now() },
    userId: mongoose.Schema.Types.ObjectId
}, {collection: 'Student'});

module.exports = userSchema;