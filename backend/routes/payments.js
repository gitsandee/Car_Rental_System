const router = require("express").Router();
let Payment = require("../models/Payment");

router.route("/add").post((req,res)=>{

    const bill_id = req.body.patient_id;
    const customer_name = req.body.patient_name;
    const customer_nic = req.body.patient_nic;
    const p_num = Number(req.body.p_num);
    const amount = Number(req.body.amount);
    const pay_method = req.body.pay_method;
    const date = req.body.date;
    const time = req.body.time;
  

    const newPayment = new Payment({

        bill_id,
        customer_name,
        customer_nic,
        p_num,
        amount,
        pay_method,
        date,
        time

    })

    newPayment.save().then(()=>{
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    })


})

router.route("/").get((req,res)=>{
    Payment.find().then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err);
    })

})


router.route("/update/:id").put(async (req,res) => {
    let billId = req.params.id;
    const {bill_id, customer_name, customer_nic, p_num, amount, pay_method, date, time} = req.body;

    const updatePayment = {
        
        bill_id,
        customer_name,
        customer_nic,
        p_num,
        amount,
        pay_method,
        date,
        time
    }

    const update = await Payment.findByIdAndUpdate(billId, updatePayment)
    .then(() => {
        res.status(200).send({status: "Bill updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
   
})

/*
router.route("/delete/:id").delete(async (req,res) => {
    let billId = req.params.id;

    await Payment.findByIdAndDelete(billId)
    .then(() => {
        res.status(200).send({status: "Bill deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with delete bill", error: err.message});
    })
})
*/

router.route("/delete/:id").delete((req,res)=>{

    let billId = req.params.id;

    Payment.findByIdAndDelete(billId).then(()=>{
        res.json("Delete Successfully");
    }).catch((err)=>{
        console.log(err);
    })

})




router.route("/get/:id").get(async (req,res) => {
    let billId = req.params.id;
    await Payment.findById(billId).then((payment) => {
        //res.status(200).send({status: "Bill fetched", payment})
        res.json(payment);
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with get bill", error: err.message});
    })
    
})


module.exports = router;