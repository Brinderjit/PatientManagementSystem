// Load the Mongoose module and Schema object
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var MotivationalTipSchema = new Schema({
    tip: {
        type: String,
        required:true
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
mongoose.model('MotivationalTip', MotivationalTipSchema);