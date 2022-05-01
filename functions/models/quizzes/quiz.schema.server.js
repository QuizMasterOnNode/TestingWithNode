const mongoose = require('mongoose')
module.exports = mongoose.Schema({


  quizName: {type: String},
  category: String,
  description: String,
  totalPoints:[Number],
  quizQuestions: [{
    //type: mongoose.Schema.Types.ObjectId,
    //ref: 'QuestionModel'
  }]
}, {collection: 'Quiz'});



/*const mongoose = require('mongoose')
module.exports = mongoose.Schema({
  title: {type: String},
  category: String,
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QuestionModel'
  }]
}, {collection: 'Quiz'});*/