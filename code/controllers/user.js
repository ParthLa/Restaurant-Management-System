var User = require('./../models/login');

module.exports = {
  createUser: function(req, res) {
    User.create(req.body)
      .then(function(result) {
        return res.status(200).json({
          message: 'success! created account for new user',
          id: result.id
        });
      })
      .catch(function(err) {
        return res.status(400).json({
          message: err
        });
      });
  },
  loadhome: function(req,res){
  	res.render('./includes/home',{'pageTitle':"Home"});
  },

  PlaceOrder: function(req, res){

  },

  GetProfile: function(req, res){

  },

  OrderHistory: function(req, res){

  }
}