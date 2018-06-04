﻿// Load the module dependencies
const config = require('./config');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
var jwt    = require('jsonwebtoken');   
//const nurse = require('../app/controllers/nurse.server.controller');
require('../config/passport')(passport);


// Define the Express configuration method
module.exports = function () {
    // Create a new Express application instance
    const app = express();
 
    // Use the 'NDOE_ENV' variable to activate the 'morgan' logger or 'compress' middleware
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
  next();
});
    // Use the 'body-parser' and 'method-override' middleware functions
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    // Configure the 'session' middleware
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));
// Configure the Passport middleware
    app.use(passport.initialize());
    app.use(passport.session());

    // Set the application view engine and 'views' folder
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    // Configure the flash messages middleware
    app.use(flash());

    

    // Configure static file serving
    app.use('/', express.static(path.resolve('./public')));
    app.use('/lib', express.static(path.resolve('./node_modules')));

    // Load the routing files	
     require('../app/routes/nurse.server.routes.js')(app);
    //  app.route('/api/nurse/vitalsigns').get(function(req, res, next) {
    //      console.log("here");
    //  });
    require('../app/routes/user.server.routes.js')(app);
     require('../app/routes/patient.server.routes.js')(app);
 
console.log(app.route);
    // Return the Express application instance
    return app;
};