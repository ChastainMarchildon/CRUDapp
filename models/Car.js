const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    make: {
        type:String,
        required:'Please enter a brand of vehicle'
    },
    model:{
        type:String,
        required:'Please enter the model of the vehicle'
    },
    year:{
        type:Number,
        required:'Please enter the vehicles year'
    }
});

module.exports = mongoose.model('Car', carSchema);