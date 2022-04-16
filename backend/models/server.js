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


    //Form types crud

    app.post("/formTypes/add", (req, res) => {
      db.collection("formTypes").insertOne(req.body, (err, result) => {
        if (err) return res.send(400, { message: err });
        res.send(200, { message: "ok" });
      });
    });

    app.post("/formTypes/update", (req, res) => {
      db.collection("formTypes").updateOne(req.body.query, req.body.newVals, (err, result) => {
        if (err) return res.send(400, { message: err });
        res.send(200, { message: "ok" });
      });
    });

    app.get("/formTypes", (req, res) => {
      db.collection("formTypes")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          res.send(200, { message: "ok", data: result });
        });
    });

    app.post("/formTypes/delete", (req, res) => {
      db.collection("formTypes").deleteOne(req.body.id, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        res.send(200, { message: "ok" });
      });
    });


    //////////////////////////

    //Form submissions crud

    app.post("/formSubmissions/add", (req, res) => {
      db.collection("formSubmissions").insertOne(req.body, (err, result) => {
        if (err) return res.send(400, { message: err });
        res.send(200, { message: "ok" });
      });
    });

    app.post("/formSubmissions/update", (req, res) => {
      db.collection("formSubmissions").updateOne(req.body.query, req.body.newVals, (err, result) => {
        if (err) return res.send(400, { message: err });
        res.send(200, { message: "ok" });
      });
    });

    app.get("/formSubmissions", (req, res) => {
      db.collection("formSubmissions")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          res.send(200, { message: "ok", data: result });
        });
    });

    app.post("/formSubmissions/delete", (req, res) => {
      db.collection("formSubmissions").deleteOne(req.body.id, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        res.send(200, { message: "ok" });
      });
    });
    //////////////////////////



    app.listen(8000, () => {
      console.log("listening on 8000");
    });
  }
);
