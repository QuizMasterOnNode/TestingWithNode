const mongoose = require('mongoose');
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
var submissionSchema = mongoose.Schema({
    //myArray: [],
    student:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
      },
    studentEmail: String,
    display_name:String,
    newScore:[{   
    quizName: String,
    dateTaken:String,
    answers: [],
    missed:[Number],
    score: Number
    }],

}, {collection: 'Student'});

module.exports = submissionSchema;