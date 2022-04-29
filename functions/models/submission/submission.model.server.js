var mongoose = require('mongoose');
var submissionSchema = require(',/submission.schema.server');
var submissionModel = mongoose.model(
    'SubmissionModel',
    submissionSchema
);
function submitQuiz(submission, quizId, username){
    submissionModel.create({
        quizId: quizId,
        username: username,
        answers: submission
    });
}
module.exports = {
    submitQuiz: submitQuiz
};