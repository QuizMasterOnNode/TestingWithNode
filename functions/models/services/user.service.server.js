module.exports = function (app) {
    app.get ('/api/user', findAllUsers)
    app.get ('/api/user/:userId', findUsersById)
    app.post ('/api/user', createUser)
    app.put ('/api/user', updateUser)
    app.delete ('/api/user/:userId', deleteUser)
    var userModel = require('../user/user.model.server');

    function createUser(req, res){
     var user = req.body;
        userModel.createUser(user)
            .then(function (user){
                res.send(user);
        });
    } 

function findAllUsers(req, res) {
    userModel.findAllUsers()
    .then(function(users){
        res.send(users);
    })
}

function findUsersById(userId) {
    userModel.findAllUsers()
    .then(function(users){
        res.send(users);
    });
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

}