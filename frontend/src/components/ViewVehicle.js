import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
const ViewVehicle = ()=>{
   const[vehicle, setvehicle] = useState({
	vehicle_id: "",
    vehicle_name: "",
    engine_number: "",
    chas_number: "",
    millage: "",
    vehicle_model: "",
    date: "",
    time: ""
   })
   const {id} = useParams();
   useEffect(() =>{
	   loadVehicles();
   }, []);
   const loadVehicles = async() =>{
	   const res = await axios.get(`http://localhost:8070/vehicle/get/${id}`);
	   setvehicle(res.data);
   }

    return(
        <div>
        <div className="fun">
        <span>Vehicle Management</span>
        </div>
       
 <div class="content" >
     <h2  align="center" > Vehicle Details </h2><br/>
     <table class="table">
	
	 
		
	 <tr>
		<td><h3> Vehicle Number :</h3></td>
		<td><h3>{vehicle.vehicle_id}</h3></td>
	</tr>
	
	<tr>
		<td><h3> Vehicle Type :</h3></td>
		<td><h3>{vehicle.vehicle_name}</h3></td>
	</tr>

	<tr>
		<td><h3> Engine Number :</h3></td>
		<td><h3>{vehicle.engine_number}</h3></td>
	</tr>
	
	<tr>
		<td> <h3>Chassis Number :</h3></td>
		<td><h3>{vehicle.chas_number}</h3></td>
	</tr>
	<tr>
		<td> <h3>Vehicle Mileage(KM) :</h3></td>
		<td><h3>{vehicle.millage}</h3></td>
	</tr>
	<tr>
		<td> <h3>Vehicle Model :</h3></td>
		<td><h3>{vehicle.vehicle_model}</h3></td>
	</tr>
    <tr>
		<td> <h3>Date :</h3></td>
		<td><h3>{vehicle.date}</h3></td>
	</tr>
    <tr>
		<td> <h3>Time :</h3></td>
		<td><h3>{vehicle.time}</h3></td>
	</tr>
	<tr>
	   <td>
           <br/><h5>If you need,</h5>
			    <br/>
				<Link className="update" to={`/update/${vehicle._id}`}> 
				<button type="submit" class="update"><h5><b>Edit Details</b></h5></button>
				</Link>
       </td> 
	</tr>	
	 
	 		 	
	</table>

	
 </div>
</div>
    );
}

export default ViewVehicle;