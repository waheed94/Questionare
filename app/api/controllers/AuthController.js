/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport');

module.exports = {


	  // login action will render the login view
	    login: function (req, res) {
	    	console.log('/login');
	    	res.view();
	     },

	  // logout action will logout using Passport
	  // and redirect
	    logout: function(req, res) {
	    	console.log('/logout');
	        req.logout();
            req.session.flash = 'You have logged out';
            req.session.destroy(function(err) {
       
               return res.redirect('/home');
                
            });
	     },

	  // Here is were we specify our facebook strategy.
	  // https://developers.facebook.com/docs/
	  // https://developers.facebook.com/docs/reference/login/
	     facebook: function(req, res) {
	     	console.log('facebook middelware');
	       passport.authenticate('facebook', 
	  		{ failureRedirect: '/login', scope: ['email'] }, 
	  		function(err, user) {
	  			console.log(user);
	  			req.logIn(user, function(err) {
	  				if (err) {
	  					res.view('500');
	  					return;
	  				}
	  				req.session.user = user;
	  				res.redirect('/home');
	  				return;
	  			});
	  			
	  		})(req, res);
	  	}
 

};

