import React, { useState } from "react";



export const VehicleCard = ({ vehicleDetails, onDelete, isAdmin, onLoad }) => {

  const [formDetails, setFormDetails] = useState(vehicleDetails)

  console.log(formDetails)

  const onUpdate = async () => {
    const requestOptions = {
      headers: { "Content-Type": "application/json" },
    };

    const BACKEND_URL = "http://127.0.0.1:8000";

    const query = { _id: formDetails._id }

    const newFormDetails = formDetails
    delete newFormDetails['_id']

    const body = { query, newVals: newFormDetails }
    const options = {
      ...requestOptions,
      body: JSON.stringify(body),
      method: "POST",
    };
    fetch(`http://127.0.0.1:8000/vehicles/update`, options)
      .then((data) => { })
      .catch((err) => console.log(err));


  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: 10,
      }}
    >
      <img
        src={require(`${vehicleDetails.image}`)}
        alt="vehicleimg"
        style={{ width: 200 }}
      ></img>
      {isAdmin ?
        <div style={{ textAlign: "left", padding: 10, display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 5 }}>
            <label style={{ paddingTop: 5 }}>{"name : "}</label>
            <input onChange={(e) => setFormDetails({ ...formDetails, 'name': e.target.value })} value={formDetails['name']}></input>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 5 }}>

            <label style={{ paddingTop: 5 }}>{"Method : "}</label>
            <input onChange={(e) => setFormDetails({ ...formDetails, 'method': e.target.value })} value={formDetails['method']}></input>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 5 }}>

            <label style={{ paddingTop: 5 }}>{"Transmission : "}</label>
            <input onChange={(e) => setFormDetails({ ...formDetails, 'Transmission': e.target.value })} value={formDetails['Transmission']}></input>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 5 }}>


            <label style={{ paddingTop: 5 }}>{"Rate : "}</label>
            <input type="number" onChange={(e) => setFormDetails({ ...formDetails, 'Rate': e.target.value })} value={formDetails['Rate']}></input>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 5 }}>


            <label style={{ paddingTop: 5 }}>{"Passengers : "}</label>
            <input type="number" onChange={(e) => setFormDetails({ ...formDetails, 'Passengers': e.target.value })} value={formDetails['Passengers']}></input>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 5 }}>


            <label style={{ paddingTop: 5 }}>{"Luggage : "}</label>
            <input type="number" onChange={(e) => setFormDetails({ ...formDetails, 'Luggage': e.target.value })} value={formDetails['Luggage']}></input>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 5 }}>

            <label style={{ paddingTop: 5 }}>{"AirConditioning : "}</label>
            <input type="bool" onChange={(e) => setFormDetails({ ...formDetails, 'AirConditioning': e.target.value })} value={formDetails['AirConditioning']}></input>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 5 }}>


            <label style={{ paddingTop: 5 }}>{"Price : "}</label>
            <input type="number" onChange={(e) => setFormDetails({ ...formDetails, 'Price': e.target.value })} value={formDetails['Price']}></input>
          </div>



        </div>

        :
        <div style={{ textAlign: "left", padding: 10 }}>
          <div style={{ fontWeight: "bolder" }}>{vehicleDetails.name}</div>
          <div>{vehicleDetails.method}</div>
          <div>{vehicleDetails.Transmission}</div>
          <div>{`LKR ${vehicleDetails.Rate} per extra km`}</div>
          <div>{`${vehicleDetails.Passengers} Passengers`}</div>
          {vehicleDetails.Luggage && (
            <div>{`${vehicleDetails.Luggage} Luggage`}</div>
          )}

          {vehicleDetails.AirConditioning ? <div>Air Conditioning</div> : null}
        </div>
      }

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >

        {isAdmin ? <div style={{ display: "flex", flexDirection: "row" }}>
          <button style={{ margin: 5, padding: 5 }} onClick={onUpdate}>Update</button>
          <button style={{ justifySelf: "flex-end" }} onClick={() => onDelete(vehicleDetails.name)}>Delete</button>
        </div> : <><div style={{ fontWeight: "bold", margin: 5 }}>
          {`LKR ${vehicleDetails.Price}`}
        </div><button style={{ margin: 5, padding: 5 }}>Book Now</button></>}



      </div>
    </div>
  );
};
