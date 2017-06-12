var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;
 
var verifyHandler = function(token, tokenSecret, profile, done) {
  process.nextTick(function() {
    
    User.findOne({uid: profile.id}, function(err, user) {
      if (user) {
      
        return done(null, user);
      } else {
 
        var data = {
          provider: profile.provider,
          uid: profile.id,
          name: profile.displayName

        };
 
        User.create(data, function(err, user) {
          return done(err, user);
        });
      }
    });
  });
};

passport.serializeUser(function(user, done) {
  console.log('serializeUser');
  done(null, user.uid);
});
 
passport.deserializeUser(function(uid, done) {
  User.findOne({uid: uid}, function(err, user) {
    console.log('deserializeUser');
    done(err, user);
  });
});
 
module.exports.http = {
 
  customMiddleware: function(app) {
 
    passport.use(new FacebookStrategy({
      clientID: "117933362131598", // Use your Facebook App Id
      clientSecret: "d6825206e414d9ebc191cacbf2b69e4e", // Use your Facebook App Secret
      callbackURL: "http://localhost:1337/auth/facebook/callback"
    }, verifyHandler));
 
    app.use(passport.initialize());
    app.use(passport.session());
  }
  
};