import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TwoColumnGrid } from "../Components";
// import vehiclesList from "./initialVehicles.json";
import { VehicleCard } from "./vehicleCard";

export const VehicleType = ({isAdmin}) => {
  const { vehicleType } = useParams();
  const [vehiclesList, setVehiclesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => onLoad(), []);

  const onLoad = () => {
    setLoading(true);
    const options = {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    };
    fetch(`http://127.0.0.1:8000/vehicles`, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setVehiclesList(data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const onDelete = (id) => {
    const options = {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ id: { name: id } }),
      method: "POST",
    };

    console.log(id);
    fetch(`http://127.0.0.1:8000/vehicles/delete`, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        onLoad();
      })
      .catch((err) => console.log(err));

    
  };

  const filteredVehicles = vehiclesList.filter(
    (vehicle) => vehicle.type === vehicleType
  );

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: "grey",
          width: "100%",
          padding: 10,
          paddingLeft: 200,
          textAlign: "left",
          fontWeight: "bolder",
        }}
      >{`${vehicleType}`}</div>
      <div style={{ backgroundColor: isAdmin ? 'rgb(0,0,250)' : "rgb(204,204,0)" }}>
        {filteredVehicles.length === 0 ? (
          <div style={{ padding: 50 }}>No vehicles in this type</div>
        ) : (
          filteredVehicles.map((vehicle) => {
            return <VehicleCard vehicleDetails={vehicle} onDelete={onDelete} isAdmin={isAdmin} onLoad={onLoad}/>;
          })
        )}
      </div>
    </div>
  );
};
