import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';



function EditVehicle() {


  let history = useHistory();
  const { id } = useParams();
  const [vehicles, setvehicles] = useState({
    vehicle_id: "",
    vehicle_name: "",
    engine_number: "",
    chas_number: "",
    millage: "",
    vehicle_model: "",
    date: "",
    time: ""
  });

  const { vehicle_id, vehicle_name, engine_number, chas_number, millage, vehicle_model, date, time } = vehicles;
  const onInputChange = e => {
    setvehicles({ ...vehicles, [e.target.name]: e.target.value });
  };


  useEffect(() => {
    loadVehicles();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();

    await axios.put(`http://localhost:8070/vehicle/update/${id}`, vehicles)
    history.push('/');

  };


  const loadVehicles = async () => {

    const result = await axios.get(`http://localhost:8070/vehicle/get/${id}`);
    setvehicles(result.data);
  };

  /*
    
  
    function EditVehicle(props) {
    let id = props.match.params.id;
  
    const [data, setData] = useState("");
  
    useEffect(() => {
      axios.get(`http://localhost:8070/payment/${id}`).then((res) => {
        setData(res.data);
        console.log(res.data);
      }).catch((err)=>{
        console.log(err);
      })
    },[])
  
    const onInputChange = e => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
    };
  
  
  
    function onSubmit() {
  
      axios.put(`http://localhost:8070/payment/update/${id}`, data).then(()=>{
        alert("Updated successfully"); 
      }).catch((err) => {
        console.log(err);
      })
      window.location.replace('/');
    };
  */

  return (

    <div>

      <div className="fun">

        <span>Vehicle Management</span>

      </div>

      <div className="add_pay">

        <form onSubmit={e => onSubmit(e)}>
          <center><h1>UPDATE Vehicle</h1></center>

         

          <div className="kl-0">
            <label for="vehicle_id" className="form-label">Vehicle ID</label>
            <input type="text" className="form-control" placeholder="Update Vehicle ID" name="vehicle_id" value={vehicle_id} onChange={(e) => onInputChange(e)} readOnly required />
          </div>

          <div className="kl-1">
            <label for="vehicle_name" className="form-label">Vehicle Name</label>
            <input type="text" className="form-control" id="vehicle_name" placeholder="Enter Vehicle Name" name="vehicle_name" value={vehicle_name} onChange={(e) => onInputChange(e)} required />
          </div>

          <div className="kl-2">
            <label for="engine_number" className="form-label">Engine Number</label>
            <input type="text" className="form-control" id="engine_number" placeholder="Enter Engine number" maxLength="10" pattern="[0-9]{9}[f]{1}" name="engine_number" value={engine_number} onChange={(e) => onInputChange(e)} required />
          </div>

          <div className="kl-3">
            <label for="chas_number" className="form-label">Chassi Number</label>
            <input type="text" className="form-control" id="chas_number" placeholder="Enter Chassis Number" maxLength="10" pattern="[0-9]{3}[0-9]{7}" name="chas_number" value={chas_number} onChange={(e) => onInputChange(e)} required />
          </div>

          <div className="kl-4">
            <label for="millage" className="form-label">Millage (KM)</label>
            <input type="text" className="form-control" id="millage" placeholder="Enter millage" name="millage" value={millage} onChange={(e) => onInputChange(e)} required />
          </div>

          <div className="kl-5">
            <label for="vehicle_model" className="form-label"> Vehicle Model</label>
            <input type="text" className="form-control" id="vehicle_model" placeholder="Enter Vehicle Model" name="vehicle_model" value={vehicle_model} onChange={(e) => onInputChange(e)} required />
          </div>

          <div className="kl-6">
            <label for="date" className="form-label">Date</label>
            <input type="text" className="form-control" id="date" placeholder="Enter Date" name="date" value={date} onChange={(e) => onInputChange(e)} required />
          </div>

          <div className="kl-7">
            <label for="time" className="form-label">Time</label>
            <input type="text" className="form-control" id="time" placeholder="Enter Time" name="time" value={time} onChange={(e) => onInputChange(e)} required />

          </div>
          <br></br>
          <button type="submit" className="btn0 btn-primary">Update Vehicle</button><br></br>
          <a href="/"><button type="submit" className="btn1 btn-primary">Cancel</button></a>
        </form>
      </div>

    </div>


  );


}

export default EditVehicle;