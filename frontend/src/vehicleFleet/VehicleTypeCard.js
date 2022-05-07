import React from "react";

export const VehicleTypeCard = ({ vehicleType, onClick }, ...props) => {
  return (
    <div onClick={onClick} style={{ height: 200 }}>
      <img src={require(`${vehicleType.image}`)} alt="vehicleTypeImg" style={{height: 150}}></img>
      <div style={{ padding: 10 }}>
        <button style={{width: 200, fontWeight: 'bold'}}>{vehicleType.type}</button>
      </div>
    </div>
  );
};
