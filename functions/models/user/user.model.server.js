var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');
var userModel = mongoose.model('UserModel', userSchema);

//import {dumpSession} from "../js/authentication.js";
import('../../static/js/authentication.js').then(({dumpSession2:user})=>{
   var studentEmail = user.email; 
   var password = user.password;
}).catch((err)=>{
    console.error('Student Emial does not exist');
})
function createUser(user){
    return userModel.create(user);
    }

 function findAllUsers(){
    return userModel.find();
 }
 function findUserByCredentials (studentEmail, password){
 userModel.findOne({studentEmail: studentEmail, password: password});
 }
 function findUsersById(userId){
   return userModel.findById(userId);
}

function deleteUsers(userId){
   return userModel.remove({_id: userId}, {$set: newUser});
}

function updateUser(userId, newUser){
   return userModel.findByIdAndUpdate({_id: userId}, {$set: newUser});
}
function findUserByIdExpanded(userId) {
  userModel
    .findById(userId)
    .populate('sections')
    .exec()
}
    var api = {
        createUser: createUser,
        findAllUsers: findAllUsers,
        findUsersById : findUsersById,
        deleteUsers: deleteUsers,
        updateUser: updateUser,
        findUserByCredentials: findUserByCredentials,
        findUserByIdExpanded: findUserByIdExpanded
    };

   module.exports = api;
   