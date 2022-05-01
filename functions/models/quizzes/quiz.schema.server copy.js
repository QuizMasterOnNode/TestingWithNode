const mongoose = require('mongoose')
module.exports = mongoose.Schema({


  quizName: {type: String},
  category: String,
  description: String,
  totalPoints:[Number]
  quizQuestions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QuestionModel'
  }]
}, {collection: 'Quiz'});