import React from "react";
import fblogo from "./socialLogos/Facebook_icon_2013.svg.png";
import instalogo from "./socialLogos/Instagram_icon.png.webp";
import walogo from "./socialLogos/icon-whatsapp-5.jpg";
import gmlogo from "./socialLogos/281769.png";

export const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "grey", height: "100%" }}>
        <div>Description</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div flex={5}>
            Do you have any question or need additional information contact us
            from:
          </div>
          <div flex={2}>
            <img style={{ height: 40, width: 40, margin: 5 }} src={fblogo} alt="fblogo" />
            <img style={{ height: 40, width: 40, margin: 5 }} src={walogo} alt="walogo" />
            <img
              style={{ height: 40, width: 40, margin: 5 }}
              src={instalogo}
              alt="instalogo"
            />
            <img
              style={{ height: 40, width: 40,  margin: 5 }}
              src={gmlogo}
              alt="gmaillogo"
            />
          </div>
          <div flex={3}>
              
          </div>
        </div>
      </footer>
    </>
  );
};
