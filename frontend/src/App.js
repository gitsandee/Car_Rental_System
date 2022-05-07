import "./App.css";

import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { VehicleFleet } from "./vehicleFleet/VehicleFleet";
import { VehicleType } from "./vehicleFleet/VehicleType";
import { AdminHome } from "./vehicleFleet/admin/Home";


function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
        }}
      >
        <div style={{ flex: 1 }}>
          <Header />
        </div>
        <Router>
          <div style={{ flex: 12 }}>
            <Routes>
              <Route exact path="/" element={<VehicleFleet />} />
              <Route exact path="/:vehicleType" element={<VehicleType />} />
              <Route exact path='/admin' element={<AdminHome />} />
              <Route exact path="/admin/types" element={<VehicleFleet isAdmin={true} />} />
              <Route exact path="admin/types/edit/:vehicleType" element={<VehicleType isAdmin={true} />} />
            </Routes>
          </div>
        </Router>

        <div style={{ flex: 5 }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
