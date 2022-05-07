import React from "react";
import styled from "styled-components";

export const Tab = styled.button`
  padding: 10px 60px;
  cursor: pointer;

  background: lightgrey;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
    background: grey;
  `}
`;
export const ButtonGroup = styled.div`
  display: flex;
`;

export const TwoColumnGrid = ({ children }) => {
  const gridElements = children.reduce(
    (acc, curr, i) =>
      i % 2 === 0
        ? [...acc, [curr]]
        : [...acc.slice(0, -1), [acc[acc.length - 1][0], curr]],
    []
  );

  console.log({ gridElements });

  return (
    <div>
      {gridElements.map((row) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              padding: 5,
            }}
          >
            {row.map((element) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                    padding: 5,
                  }}
                >
                  {element}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export const FleetBackground = () => {
  return (
    <div style={{ position: "relative" }}>
      <img
        src={require("./vehicleFleet/images/fleetbg2.jpg")}
        alt="fleetbg"
        style={{
          width: "100%",
          maxHeight: 300,
          objectFit: "cover",
        }}
      ></img>
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 10,
          padding: 10,
          width: 400,
          fontWeight: "bold",
          fontSize: 40,
          color: "rgb(204,204,0)",
        }}
      >
        RENT A CAR & OTHER VEHICLES FROM CAR CASTLE
      </div>
    </div>
  );
};
