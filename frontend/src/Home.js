import React, { useState } from "react";
import { ButtonGroup, Tab } from "./Components";
import { Form } from "./Form";
import withDriveImg from './images/withdrive.jpg'
import transferImg from './images/transfers.jpg'
import airportImg from './images/airport.jpg'
import weddingImg from './images/wedding.jpg'
import selfImg from './images/self.jpg'

export const Home = () => {
  const types = [
    { name: "Self Drive", image: selfImg },
    { name: "With Driver", image: withDriveImg },
    { name: "Transfers(taxi)", image: transferImg },
    { name: "Airport Transfers", image: airportImg},
    { name: "Weddings", image: weddingImg },
  ];

  const typeNames = types.map((type) => type["name"]);

  const [active, setActive] = useState(typeNames[0]);

  return (
    <div style={{ backgroundColor: "transparent", height: '100%' }}>
      <img src={types.find(type => type.name === active).image} style={{position: 'absolute', objectFit:'fill', zIndex: -1, height: '100%', width: '100%', right: 0, top: 0, opacity: 0.5}} alt='bg'/>
      <ButtonGroup style={{backgroundColor: "rgba(255,255,0,0.9)", zIndex: 100}}>
        {typeNames.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      <Form form={types.filter((type) => type.name === active)[0]} />
    </div>
  );
};
