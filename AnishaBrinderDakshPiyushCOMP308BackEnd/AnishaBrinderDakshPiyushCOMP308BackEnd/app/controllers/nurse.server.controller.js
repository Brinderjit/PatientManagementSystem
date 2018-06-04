const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
var config = require('../../config/config');
const User = require('mongoose').model('User');
const Sign = require('mongoose').model('Vital');
const MotivationalTip = require('mongoose').model('MotivationalTip');
const Alert = require('mongoose').model('Alert');
exports.insertSigns = function (req, res) {
    console.log(req.body);
    var sign = new Sign(req.body);

    var userid=getUserIdFromToken(req.headers);
    // Try saving the User
   User.findOne({_id : userid},(err, user) => {
            sign.creator = user;
            console.log(sign.creator);
           sign.save((err) => {
            if (err) {
                console.log(err);
                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            } else {
                res.status(200).json(sign);
            }
        });
    });
 
}

exports.getSignsByPatient = function (req, res,next) {
    console.log("Inside get list");
       var userid=getUserIdFromToken(req.headers);
    User.findOne({_id: userid},(err, user) => {
           console.log(user);
                Sign.find().populate('patient').exec({creator:user},(err, signs) => {
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
exports.getAllAlerts = function (req, res,next) {
    console.log("Inside get list");
    
                Alert.find().populate('creator').exec((err, signs) => {
                    console.log(signs);
            if (err) {
                return res.send({
                    message: getErrorMessage(err)
                });
            } else {
                
                res.status(200).json(signs);
            }
        });
   
   
};
exports.insertSigns = function (req, res) {
    console.log(req.body);
    var sign = new Sign(req.body);

    var userid=getUserIdFromToken(req.headers);
    // Try saving the User
   User.findOne({_id : userid},(err, user) => {
            sign.creator = user;
            console.log(sign.creator);
           sign.save((err) => {
            if (err) {
                console.log(err);
                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            } else {
                res.status(200).json(sign);
            }
        });
    });
 
};
exports.insertDailyTip = function (req, res) {
    console.log(req.body);
    var Tip = new MotivationalTip(req.body);

    var userid=getUserIdFromToken(req.headers);
    // Try saving the User
   User.findOne({_id : userid},(err, user) => {
            Tip.creator = user;
          
           Tip.save((err) => {
            if (err) {
                console.log(err);
                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            } else {
                res.status(200).send({
                message: "Daily Motivational tip created successfully"
            });
            }
        });
    });
 
};


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

getUserIdFromToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
   
    if (parted.length === 2) {
       var decoded = jwt.verify(parted[1], config.sessionSecret);

        
      return decoded.id;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

