const mongoose = require('mongoose');
module.exports = function (app) {

    app.get ('/api/quiz', findAllSubmissions)
    app.get ('/api/quiz/:submissionId', findAllSubmissionsForStudent)
    app.post ('/api/quiz', createSubmission)
    //app.put ('/api/user', updateSubmission)
    //app.delete ('/api/user/:SubmissionId', deleteSubmission)
    var submissionModel = require('../submission/submission.model.server.js');

    function createSubmission(req, res){
     var submission = req.body;
        submissionModel
        .createSubmission(submission)
            .then(function (submission){
                res.send(submission);
         });
    } 

function findAllSubmissions(req, res) {
    submissionModel.findAllSubmissions()
    .then(function(submission){
        res.send(submission);
    })
}

function findAllSubmissionsForStudent(studentId){
    submissionModel.findAllSubmissions()
    .then(function(submission){
        res.send(submission);
    });
}
/*
function findAllSubmissionsForStudent(studentId) {
    submissionModel.findAllSubmissions()
    .then(function(submission){
        res.send(submission);
    });
}*/
/*
function findAllSubmissionsForQuiz(quizId) {
    submissionModel.findAllSubmissionsForQuiz()
    .then(function(submission){
        res.send(submission);
    })
}

function deleteUser(req, res){
    var userId = req.params.userId;
    userModel
    .deleteUser(userId)
    .then(function(status){
        res.send(status);
    });
}

function updateUser(req, res){
    var user = req.body;
    userModel
    .updateUser(req.params.userId, user)
    .then(function(status){
        res.send(status);
    });
}
*/
}