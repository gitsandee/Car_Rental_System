import React from "react";
import logo from "./images/carcastle_logo.jpeg";

export const Header = () => {
  return (
    <div>
      <header
        style={{
          backgroundColor: "blue",
          display: "flex",
          flexDirection: "row",
          height: "100%",
        }}
      >
        <img src={logo} alt="logo" style={{ padding: 5, height: 40 }}></img>
        <div
          style={{
            padding: 5,
            flex: 10,
            fontSize: 20,
            textAlign: "left",
            fontWeight: "bolder",
          }}
        >
          Car Castle
        </div>
      </header>
      <nav style={{backgroundColor: 'rgba(255,255,0, 0.9)'}}>
        <div style={{ display: "flex", padding: 5, flexDirection: 'row', alignContent: 'flex-end' }}>
          <div className="toplink" style={{ padding: 5 }}>
            <a href="/">Home</a>
          </div>
          <div className="toplink" style={{ padding: 5 }}>
            <a href="/vehicleFleet">Vehicle fleet</a>
          </div>
        </div>
      </nav>
    </div>
  );
};
