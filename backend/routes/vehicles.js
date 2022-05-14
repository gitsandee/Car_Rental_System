const router = require("express").Router();
let Vehicle = require("../models/Vehicle");

router.route("/add").post((req, res) => {

    const vehicle_id = req.body.vehicle_id;
    const vehicle_name = req.body.vehicle_name;
    const engine_number = req.body.engine_number;
    const chas_number = req.body.chas_number;
    const millage = req.body.millage;
    const vehicle_model = req.body.vehicle_model;
    const date = req.body.date;
    const time = req.body.time;


    const newVehicle = new Vehicle({

        vehicle_id,
        vehicle_name,
        engine_number,
        chas_number,
        millage,
        vehicle_model,
        date,
        time

    })

    newVehicle.save().then(() => {
        res.json("vehicle Added successfully")
    }).catch((err) => {
        console.log(err);
    })


})

router.route("/").get((req, res) => {
    Vehicle.find().then((vehicles) => {
        res.json(vehicles)
    }).catch((err) => {
        console.log(err);
    })

})


router.route("/update/:id").put(async (req, res) => {
    let id = req.params.id;
    const { vehicle_id, vehicle_name, engine_number, chas_number, millage, vehicle_model, date, time } = req.body;

    const updateVehicle = {

        vehicle_id,
        vehicle_name,
        engine_number,
        chas_number,
        millage,
        vehicle_model,
        date,
        time
    }

    await Vehicle.findByIdAndUpdate(id, updateVehicle)
        .then(() => {
            res.status(200).send({ status: "Vehicle Updated" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data", error: err.message });
        })

})

/*
router.route("/delete/:id").delete(async (req,res) => {
    let id = req.params.id;

    await Payment.findByIdAndDelete(id)
    .then(() => {
        res.status(200).send({status: "Bill deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with delete bill", error: err.message});
    })
})
*/

router.route("/delete/:id").delete((req, res) => {

    let id = req.params.id;

    Vehicle.findByIdAndDelete(id).then(() => {
        res.json("Delete Successfully");
    }).catch((err) => {
        console.log(err);
    })

})




router.route("/get/:id").get(async (req, res) => {
    let id = req.params.id;
    await Vehicle.findById(id).then((vehicle) => {
        //res.status(200).send({status: "Bill fetched", vehicle})
        res.json(vehicle);
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with get bill", error: err.message });
    })

})


module.exports = router;