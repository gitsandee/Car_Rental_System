import "./App.css";

import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ConfirmDetails } from "./ConfirmDetails";


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
          <div style={{ flex: 12}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/confirmDetails/:id" element={<ConfirmDetails/>} />
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
