var mongoose = require('mongoose');


var searchSchema = new mongoose.Schema({
    term : String,
    when : {type: Date, default: Date.now}
});


// declare a model called Search Which has schema sarchSchema.
mongoose.model("Search", searchSchema);