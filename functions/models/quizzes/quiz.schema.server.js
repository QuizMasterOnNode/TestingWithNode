const mongoose = require('mongoose')
module.exports = mongoose.Schema({
  title: {type: String},
  category: String,
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QuestionModel'
  }]
}, {collection: 'Quiz'});