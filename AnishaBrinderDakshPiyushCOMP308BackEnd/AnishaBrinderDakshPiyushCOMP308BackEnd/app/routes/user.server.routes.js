// Load the module dependencies
const users = require('../../app/controllers/user.server.controller');
const nurse = require('../../app/controllers/nurse.server.controller');
const passport = require('passport');


// Define the routes module' method
module.exports = function (app) {
    // Set up the 'signup' routes 
    app.route('/api/auth/signup').post(users.signup);

    // Set up the 'signin' routes 
    app.route('/api/auth/signin').post(users.signin);

    // Set up the 'signout' route
    app.route('/api/auth/signout').get(users.signout);
     app.route('/api/patient').get(users.getPatients);
   
   // app.route('/api/auth/allStudents').get(users.getAllStudents);
};