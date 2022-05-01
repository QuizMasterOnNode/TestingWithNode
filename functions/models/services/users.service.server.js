module.exports = app => {
  import('../../static/js/authentication.js').then(({dumpSession2:user})=>{

    
  }).catch((err)=>{
      console.error('Student does not exist');
  })
    const userModel = require('../user/user.model.server');
  
    findAllUsers = (req, res) =>
      userModel.findAllUsers()
        .then(users => {
          res.send(users);
        });
  
    login = (req, res) => {
      const user = req.body;
      userModel.findUserByCredentials(user.studentEmail, user.password)
        .then(user => {
          req.session['currentUser'] = user;
          res.send(req.session['currentUser']);
        });
    };
  
    currentUser = (req, res) => {
      const currentUser = req.session['currentUser'];
      if(currentUser) {
        userModel.findUserByIdExpanded(currentUser._id)
          .then(user => res.send(user))
      } else {
        res.sendStatus(403)
      }
    }
  
    app.get ('/currentUser', currentUser);
    app.get ('/api/user', findAllUsers);
    app.post('/login', login);
  };