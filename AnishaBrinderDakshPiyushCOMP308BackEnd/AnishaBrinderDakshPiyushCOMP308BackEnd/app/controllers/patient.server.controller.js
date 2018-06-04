    const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
var config = require('../../config/config');
const Vital = require('mongoose').model('Vital');
const User = require('mongoose').model('User');
const MotivationalTip = require('mongoose').model('MotivationalTip');
const Alert = require('mongoose').model('Alert');
var ml = require('machine_learning');
exports.getSignsByPatient = function (req, res,next) {
    console.log("Inside get list");
    var userid=getUserIdFromToken(req.headers);
    User.findOne({_id: userid},(err, user) => {
           console.log(user);
           Vital.find({creator:user},(err, signs) => {
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

exports.insertSigns = function (req, res) {
    console.log(req.body);
    var vital = new Vital(req.body);
    var userid=getUserIdFromToken(req.headers);
    // Try saving the User
   User.findOne({_id : userid},(err, user) => {
    vital.creator = user;
            console.log(vital.creator);
            vital.save((err) => {
            if (err) {
                console.log(err);
                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            } else {
                res.status(200).json(vital);
            }
        });
    });
}

exports.createAlerts = function (req, res) {
    console.log(req.body);
    var alert = new Alert(req.body);
    var userid=getUserIdFromToken(req.headers);
    // Try saving the User
   User.findOne({_id : userid},(err, user) => {
     alert.creator = user;
           
             alert.save((err) => {
            if (err) {
                console.log(err);
                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            } else {
                 res.status(200).send({
                message: "Alert created successfully"
            });
            }
        });
    });
}
exports.getTips = function (req, res) {
     MotivationalTip.findOne().sort({date: -1}).exec({},(err, signs) => {
                    console.log(signs);
            if (err) {
                return res.send({
                    message: getErrorMessage(err)
                });
            } else {
                
                res.status(200).json(signs);
            }
        });
}
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


// Create a new 'render' controller method
exports.symptomClassifier = function (req, res) {
    //read the new data
    var fever = req.body.fever;
    console.log(fever);
    var cough = req.body.cough;
    console.log(cough);
    var fatigue = req.body.fatigue;
    console.log(fatigue);
    var age = req.body.age;
    //
    // Predicting influenca
    //'fever' 'cough' ‘fatigue’, 'age'
    var data =
        [
            ['no', 'yes', 'yes', 60],
            ['yes', 'no', 'no', 40],
            ['yes', 'yes', 'no', 50],
            ['yes', 'yes', 'yes', 70],
            ['yes', 'yes', 'yes', 65],
            ['yes', 'yes', 'no', 35],
            ['no', 'no', 'no', 30],
            ['yes', 'no', 'no', 30],
            ['yes', 'yes', 'no', 35],
            ['yes', 'yes', 'no', 40],
            ['yes', 'yes', 'yes', 50],
            ['yes', 'yes', 'yes', 50],
            ['no', 'no', 'no', 25],
            ['yes', 'yes', 'no', 65],
            ['yes', 'no', 'no', 45],
            ['yes', 'yes', 'yes', 50]

        ];
    //decison made
    var result = [
        'no', 'no', 'no', 'yes', 'yes',
        'no', 'no', 'no', 'no', 'no',
        'no', 'no', 'no', 'no', 'no',
        'yes'
    ];


    
    //create new Decision Tree using this dataset
    var dt = new ml.DecisionTree({
        data: data,
        result: result
    });
    // build the basic structure of this Decision Tree
    //  build method automatically builds Decision Tree 
    //  by finding the best criteria which minimize 
    //  the whole entropy of Decision Tree recursively. 
    //  (Classification And Regression Tree (CART) Algorithm) 
    dt.build();
    //classifiy new data using this Decision Tree
    console.log("Classify : ", dt.classify([fever, cough, fatigue, age]));
    var classificationResult = dt.classify([fever, cough, fatigue, age])
    var tree = dt.getTree();

    //Pruning Decision Tree is recommended to avoid overfitting
    // Decision Tree in this library uses simple pruning algorithm
    // which merges two branches of Decision Tree
    // when entropy loss of merging the two branches
    // is smaller than mingain value. 
    dt.prune(1.0); // 1.0 : mingain.
res.status(200).json(tree);
    // Use the 'response' object to render the 'index' view with a 'title' property
   
};