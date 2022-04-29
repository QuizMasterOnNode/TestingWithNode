var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');
var userModel = mongoose.model('UserModel', userSchema);

function createUser(user){
    return userModel.create(user);
    }

 function findAllUsers(){
    return userModel.find();
 }
 function findUserByCredentials (username, password){
 userModel.findOne({username: username, password: password});
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
   