import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FleetBackground, TwoColumnGrid } from "../Components";
import { VehicleTypeCard } from "./VehicleTypeCard";
// import vehicleTypes from './initialVehicleTypes.json'

export const VehicleFleet = ({ isAdmin }) => {
  const navigate = useNavigate();
  const [vehicleTypes, setVehicleTypes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => onLoad(), [])

  const onLoad = () => {
    const options = { headers: { "Content-Type": "application/json" }, method: "GET" };
    fetch(`http://127.0.0.1:8000/vehicleTypes`, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => { setVehicleTypes(data.data); setLoading(false) })
      .catch((err) => console.log(err));
  }

  if (loading) {
    return <></>
  }


  return (
    <div style={{ backgroundColor: isAdmin ? 'rgb(0,0,200)' : 'rgb(204,204,0)' }}>
      {!isAdmin ? <FleetBackground /> : null}

      <TwoColumnGrid>
        {vehicleTypes.map((vehicleType) => {
          return <VehicleTypeCard onClick={isAdmin ? () => navigate(`edit/${vehicleType.type}`) : () => navigate(vehicleType.type)} vehicleType={vehicleType} />;
        })}
      </TwoColumnGrid>
    </div>
  );
};
