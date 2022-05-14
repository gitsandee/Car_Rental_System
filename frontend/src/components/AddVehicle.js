import React, { useState } from 'react';
import axios from "axios";
import swal from 'sweetalert';

export default function AddVehicle() {



  const [vehicle_id, setVehicleId] = useState("");
  const [vehicle_name, setVehicleName] = useState("");
  const [engine_number, setEngineNumber] = useState("");
  const [chas_number, setChasNumber] = useState("");
  const [millage, setMillage] = useState("");
  const [vehicle_model, setVehicleModel] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");



  function sendData(e) {
    e.preventDefault();


    const newVehicle = {
      vehicle_id,
      vehicle_name,
      engine_number,
      chas_number,
      millage,
      vehicle_model,
      date,
      time
    }


    axios.post("http://localhost:8070/vehicle/add", newVehicle).then(() => {
      swal({

        title: "Success",

        text: "Vehicle Added Successfully!",

        icon: "success",

        button: "OK"

      });

    }).catch((err) => {
      alert(err)
    })
    window.location.href = "/"; /*window.location.replace('/');*/

  }


  return (

    <div>

      <div className="fun">

        <span>Vehicle Management</span>

      </div>


      <div className="add_pay">

        <form onSubmit={sendData}>
          <center><h1>ADD VEHICLE DETAILS</h1></center>

          <div className="kl-0">
            <label for="vehicle_id" className="form-label">Vehicle Number</label>
            <input type="text" className="form-control" id="vehicle_id" placeholder="Enter Vehicle Number" required
              onChange={(e) => {
                setVehicleId(e.target.value);
              }} />
          </div>

          <div className="kl-1">
            <label for="vehicle_name" className="form-label">Vehicle Name</label>
            <input type="text" className="form-control" id="vehicle_name" placeholder="Enter Vehicle Type" required
              onChange={(e) => {
                setVehicleName(e.target.value);
              }} />
          </div>

          <div className="kl-2">
            <label for="engine_number" className="form-label">Engine Number</label>
            <input type="text" className="form-control" id="engine_number" oninvalid="this.setCustomValidity('pleas Enter Engine Number')" placeholder="Enter Engine Number" maxLength="10" pattern="[0-9]{9}[f]{1}" required
              onChange={(e) => {
                setEngineNumber(e.target.value);
              }} />
          </div>

          <div className="kl-3">
            <label for="chas_number" className="form-label">Chassis Number</label>
            <input type="text" className="form-control" id="chas_number" oninvalid="this.setCustomValidity('pleas Enter Chassis Number')" placeholder="Enter Chassis Number" maxLength="10" pattern="[0-9]{3}[0-9]{7}" required
              onChange={(e) => {
                setChasNumber(e.target.value);
              }} />
          </div>

          <div className="kl-4">
            <label for="millage" className="form-label">Vehicle Mileage(KM)</label>
            <input type="text" className="form-control" oninvalid="this.setCustomValidity('pleas Enter Vehicle Mileage')" id="millage" placeholder="Enter Vehicle Mileage In KM" required
              onChange={(e) => {
                setMillage(e.target.value);
              }} />
          </div>

          <div className="kl-5">
            <label for="vehicle_model" className="form-label">Vehicle Model</label>
            <input type="text" className="form-control" id="vehicle_model" oninvalid="this.setCustomValidity('Enter Vehicle Model')" placeholder="Enter Vehicle Model" required
              onChange={(e) => {
                setVehicleModel(e.target.value);
              }} />
          </div>

          <div className="kl-6">
            <label for="date" className="form-label">Date</label>
            <input type="text" className="form-control" id="date" placeholder="Enter Date" required
              onChange={(e) => {
                setDate(e.target.value);
              }} />
          </div>

          <div className="kl-7">
            <label for="time" className="form-label">Time</label>
            <input type="text" className="form-control" id="time" placeholder="Enter Time" required
              onChange={(e) => {
                setTime(e.target.value);
              }} />
          </div>
          <br></br>
          <button type="submit" className="btn0 btn-primary">Add Vehicle</button><br></br>
        </form>
        <button type="submit" className="btn1 btn-primary">Cancel</button>

      </div>

    </div>

  )

}