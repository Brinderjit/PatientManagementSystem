// Load the module dependencies
const patient = require('../../app/controllers/patient.server.controller');
const passport = require('passport');

// Define the routes module' method
module.exports = function (app) {
    // Set up the 'signup' routes 
    app.route('/api/patient/vitalsigns').get(patient.getSignsByPatient);
    app.route('/api/patient/vitalsigns').post(patient.insertSigns);
    app.route('/api/nurse/dailytip').get(patient.getTips);
    app.route('/api/patient/alert').post(patient.createAlerts);
    app.route('/api/patient/checksymptoms').post(patient.symptomClassifier);
};