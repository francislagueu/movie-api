var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = Schema({
    'name':{
        type:String,
        required:[true, 'Title is required.'],
        trim: true
    },
    'release_date':{
        type:Date,
        required: [true, 'Release date is required.'],
        trim: true
    },
    'director':{
        type: String,
        required: [true, 'Director is required.'],
        trim: true
    }
},
{
    'timestamps': true
}
);

var Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;