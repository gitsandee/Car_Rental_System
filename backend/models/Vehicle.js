const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({

    vehicle_id : {
        type : String,
        required: true
    },
    vehicle_name : {
        type : String,
        required: true
    },
    engine_number : {
        type : String,
        required: true
    },
    chas_number : {
        type : String,
        required: true
    },
    millage: {
        type : String,
        required: true
    },
    vehicle_model: {
        type : String,
        required: true
    },
    date: {
        type : String,
        required: true
    },
    time: {
        type : String,
        required: true
    }

})

const Vehicle = mongoose.model("Vehicle",vehicleSchema);

module.exports = Vehicle;