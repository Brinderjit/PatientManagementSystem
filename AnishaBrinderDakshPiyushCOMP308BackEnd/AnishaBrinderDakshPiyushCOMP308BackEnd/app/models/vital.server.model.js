// Load the Mongoose module and Schema object
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var VitalSchema = new Schema({
    bodytemprature: {
        type: String,
        required: true
    },
    heartrate: {
        type: String,
        required: true
    },
    bloodpressure: {
        type: String,
        required: true
    },
    respiratoryrate: {
        type: String,
    },
    patient:{
        type: Schema.ObjectId,
        ref: 'User'
    },
    creationtime: {
        type: Date,
        default: Date.now
    },
    creator:{
        type: Schema.ObjectId,
        ref: 'User'
    }
});


mongoose.model('Vital', VitalSchema);