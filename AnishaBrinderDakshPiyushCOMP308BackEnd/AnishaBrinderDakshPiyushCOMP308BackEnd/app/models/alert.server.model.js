// Load the Mongoose module and Schema object
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var AlertSchema = new Schema({
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    creator:{
        type: Schema.ObjectId,
        ref: 'User' 
    }


});

// Create the 'Course' model out of the 'CourseSchema'
mongoose.model('Alert', AlertSchema);