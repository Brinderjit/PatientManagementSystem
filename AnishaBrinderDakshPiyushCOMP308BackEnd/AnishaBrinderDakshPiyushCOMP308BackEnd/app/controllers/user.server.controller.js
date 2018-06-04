const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
var config = require('../../config/config');
const User = require('mongoose').model('User');


const getErrorMessage = function (err) {
    // Define the error message variable
    let message = '';

    // If an internal MongoDB error occurs get the error message
    if (err.code) {
        switch (err.code) {
            // If a unique index error occurs set the message error
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            // If a general error occurs set the message error
            default:
                message = 'Something went wrong';
        }
    } else {
        // Grab the first error message from a list of possible errors
        for (const errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        }
    }

    // Return the message error
    return message;
};

// Create a new controller method that signin users
exports.signin = function (req, res, next) {
    User.findOne({
        email: req.body.username
    }, function (err, user) {
        if (err) throw err;
        if (!user) {
            res.status(401).send({ success: false, message: 'Authentication failed. User not found.' });
        }
        else if (!user.authenticate(req.body.password)) {
            res.status(401).send({ success: false, message: 'Invalid password' });
        }
        else {

            console.log(user);
            var token = jwt.sign(JSON.parse(JSON.stringify(user)), config.sessionSecret);
            // return the information including token as JSON
            console.log(user);
            res.json({ success: true, token: token, user: user });
        }
    });
}

// Create a new controller method that creates new 'regular' users
exports.signup = function (req, res) {
    console.log(req.body);
    var user = new User(req.body);
    // Try saving the User
    user.save((err) => {
        if (err) {
            console.log(err);
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Remove sensitive data before login
            user.password = undefined;
            user.salt = undefined;

            // Login the user

            res.status(200).json(user);


        }
    });
}
exports.getPatients = function (req, res) {
     User.find({
        type:"patient"
    }, function (err, users) {
          if (err) throw err;
          console.log(users);
          if(users)
          {
             res.status(200).json(users);
          }
    
    });
}

exports.signout = function (req, res) {
    // Use the Passport 'logout' method to logout
    req.logout();

    // Redirect the user back to the main application page
    res.redirect('/');
};
//uses the Passport-initiated req.
//isAuthenticated() method to check whether a user is currently authenticated
exports.requiresLogin = function (req, res, next) {
    console.log(req.headers);
    if (req.headers && req.headers.authorization) {
    var parted = req.headers.authorization.split(' ');
   var decoded;
    if (parted.length === 2) {
       decoded = jwt.verify(parted[1], config.sessionSecret);
       console.log(decoded);

    }
   
    if (!decoded) {
        return res.status(401).send({
            message: 'User is not logged in'
        });
    }
     next();
    }
    else
    {
        return res.status(401).send({
                    message: 'No Authentication token sent to server'
                });
    }
   
};
exports.getSignsByPatient = function (req, res,next,id) {
    console.log("Inside get list");
       var userid=getUserIdFromToken(req.headers);
    User.findOne({_id: userid},(err, user) => {
           console.log(user);
                Sign.find({creator:user},(err, signs) => {
                    console.log(signs);
            if (err) {
                return res.send({
                    message: getErrorMessage(err)
                });
            } else {
                
                res.status(200).json(signs);
            }
        });
    });
   
};