var mongoose = require('mongoose');
var submissionSchema = require('./submission.schema.server');
//var  studentEmail = require('../../static/js/authentication.mjs');
//import {dumpSession} from "./authentication.mjs";
var submissionModel = mongoose.model('submissionModel', submissionSchema);

/*
import('../../static/js/authentication.js').then(({dumpSession:studentEmail})=>{

    
}).catch((err)=>{
    console.error('Student Emial does not exist');
})
*/
function createSubmission(submission){
   return submissionModel.create(submission);
}


function findAllSubmissions(){
    return submissionModel.find();
}

function findAllSubmissionsForStudent(studentId){
    return submissionModel.find({student: studentId});
}


function findAllSubmissionsForQuiz(quizId){
    return submissionModel.find({quiz: quizId});
}
/*
function findAllSubmissionsForStudent(newListing){
    return submissionModel.find({studentEmail: newListing});
}
*/

  var api = {
  createSubmission:createSubmission,
  findAllSubmissions:findAllSubmissions,
  findAllSubmissionsForStudent:findAllSubmissionsForStudent,
  findAllSubmissionsForQuiz:findAllSubmissionsForQuiz
};

module.exports = api;