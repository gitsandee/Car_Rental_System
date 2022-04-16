const express = require("express");
cors = require("cors");
const MongoClient = require("mongodb").MongoClient;

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile("D:/PROJECTS/vehicleRent/backend" + "/index.html");
});

var db;

MongoClient.connect(
  "mongodb://localhost:27017/vehicleRent",
  (err, database) => {
    if (err) return console.log(err);
    db = database.db("vehicleRent");


    //vehicles crud

    app.post("/vehicles/add", (req, res) => {
      db.collection("vehicles").insertOne(req.body, (err, result) => {
        if (err) return res.send(400, { message: err });
        res.send(200, { message: "ok" });
      });
    });

    app.post("/vehicles/update", (req, res) => {
      db.collection("vehicles").updateOne(req.body.query, req.body.newVals, (err, result) => {
        if (err) return res.send(400, { message: err });
        res.send(200, { message: "ok" });
      });
    });
    
    app.get("/vehicles", (req, res) => {
      db.collection("vehicles")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          res.send(200, { message: "ok", data: result });
        });
    });

    app.post("/vehicles/delete", (req, res) => {
      db.collection("vehicles").deleteOne(req.body.id, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        res.send(200, { message: "ok" });
      });
    });

    //vehicle types crud

    app.post("/vehicleTypes/add", (req, res) => {
      db.collection("vehicleTypes").insertOne(req.body, (err, result) => {
        if (err) return res.send(400, { message: err });
        res.send(200, { message: "ok" });
      });
    });

    app.post("/vehicleTypes/update", (req, res) => {
      db.collection("vehicleTypes").updateOne(req.body.query, req.body.newVals, (err, result) => {
        if (err) return res.send(400, { message: err });
        res.send(200, { message: "ok" });
      });
    });

    app.get("/vehicleTypes", (req, res) => {
      db.collection("vehicleTypes")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          res.send(200, { message: "ok", data: result });
        });
    });

    app.post("/vehicleTypes/delete", (req, res) => {
      db.collection("vehicleTypes").deleteOne(req.body.id, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        res.send(200, { message: "ok" });
      });
    });


    app.listen(8000, () => {
      console.log("listening on 8000");
    });
  }
);
