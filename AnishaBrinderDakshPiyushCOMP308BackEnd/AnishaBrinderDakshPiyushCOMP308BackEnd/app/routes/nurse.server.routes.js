const nurse = require('../../app/controllers/nurse.server.controller');
const passport = require('passport');

// Define the routes module' method
module.exports = function (app) {
    //router.get('/api/nurse/vitalsigns', nurse.getSignsByPatient);
    app.route('/api/nurse/vitalsigns').get(nurse.getSignsByPatient);
    app.route('/api/nurse/vitalsigns').post(nurse.insertSigns);
     app.route('/api/nurse/dailytip').post(nurse.insertDailyTip);
   app.route('/api/nurse/alerts').get(nurse.getAllAlerts);
};