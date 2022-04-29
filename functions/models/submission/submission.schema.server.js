const mongoose = require('mongoose');
var submissionSchema = mongoose.Schema({
    username: String,
    quizId: String,
    answers: Object,
    scores: [Number]
}, {collection: 'submissions'});

module.exports = submissionSchema;