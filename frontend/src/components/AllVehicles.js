import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import swal from 'sweetalert';

const AllVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    loadVehicles();
  }, []);

  const loadVehicles = async () => {
    const result = await axios.get("http://localhost:8070/vehicle");
    setVehicles(result.data.reverse());
    console.log(result.data);
  };

  function deleteVehicle(id) {
    axios.delete(`http://localhost:8070/vehicle/delete/${id}`).then(() => {
      swal({

        title: "Success",

        text: "Vehicle Deleted Successfully!",

        icon: "success",

        button: "OK"

      });
    }).catch((err) => {
      console.log(err);
    })
    window.location.reload();
  }

  return (

    <div>

      <div className="fun">

        <span>Vehicle Management</span>

      </div>

      <div className="epay">

       

        <Link to={'/add'} >
          <button type="submit" className="addvbtn"><b>+Add New Vehicle</b></button>
        </Link>

        <div class="search-container">
          {/* 
            <input className="search123" type="text" placeholder="Search vehicle" name="search1" />
            <Link to={'/get/:id'} >
              <button className="btn13" type="submit">Search</button>
            </Link>
          </form> */}


          <form className="search ">
            <input
              className="search123"
              type="text"
              placeholder=" search here"search
              name="searchTerm"


              onChange={(e) => {

                setsearchTerm(e.target.value);

              }}


            />
          </form>
        </div>


        <div className="all_pay">
          <center><h1>ALL VEHICLE DETAILS</h1></center>

          <table className="table table-dark table-striped">
            <thead>
              <tr>
                {/*<th scope="col"> </th>*/}
                <th scope="col">Vehicle Number</th>
                <th scope="col">Vehicle Name</th>
                <th scope="col">Engine Number</th>
                <th scope="col">Chassis Number</th>
                <th scope="col">Vehicle Mileage(KM)</th>
                <th scope="col">Vehicle Model</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                {/*th scope="col">Action</th>*/}
                <th scope="col"></th>
                <th scope="col">Action</th>
                <th scope="col"></th>
              </tr>
            </thead>


            <tbody>


              {
                vehicles.filter(val => {

                  if (searchTerm === "") {

                    return val;

                  } else if (

                    val.vehicle_id.toLowerCase().includes(searchTerm.toLowerCase())

                  ) {

                    return val;

                  }

                })
                  .map((vehicle, key) => {
                    return (
                      <tr>
                        <td>{vehicle.vehicle_id}</td>
                        <td>{vehicle.vehicle_name}</td>
                        <td>{vehicle.engine_number}</td>
                        <td>{vehicle.chas_number}</td>
                        <td>{vehicle.millage}</td>
                        <td>{vehicle.vehicle_model}</td>
                        <td>{vehicle.date}</td>
                        <td>{vehicle.time}</td>
                        <td><Link className="view" to={`/viewvehicle/${vehicle._id}`}>
                          <button type="submit" className="btn10 btn-primary">Views</button>
                        </Link>
                        </td>
                        <td><Link className="edit" to={`/update/${vehicle._id}`}>
                          <button type="submit" className="btn11 btn-primary">Update</button>
                        </Link>
                        </td>
                        <td><Link className="delete" onClick={() => deleteVehicle(vehicle._id)}>
                          <button type="submit" name="delete_btn" className="btn12 btn-primary">Delete</button>
                        </Link>
                        </td>
                      </tr>
                    );
                  })
              }


            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default AllVehicles; 