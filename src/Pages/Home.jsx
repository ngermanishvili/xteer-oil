import React from "react";
import { Divider } from "antd";
import CenteredImages from "../components/OurProducts/CenteredImages";
import Companies from "../components/Companies/Companies";
import BasicSlider from "../components/demoSlider/DemoSlider";

const Home = () => (
  <>
    <div
      id="part-1"
      style={{
        width: "100%",
        height: "auto",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <BasicSlider />
      {/* <div className="p-5"></div> */}
      <Divider
        style={{
          marginBottom: "25px",
          color: "#000",
          fontSize: "2rem",
          fontWeight: "800",
        }}
      >
        პროდუქცია
      </Divider>
      <CenteredImages />
      <div
        id="part-2"
        style={{
          width: "100%",
          height: "auto",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div className="companies-container">
          <Companies />
        </div>
      </div>
      <Divider
        style={{ backgroundColor: "#fff", fontSize: "20px", fontWeight: "800" }}
      >
        რატომ ჩვენ?
      </Divider>
      <div className="p-5"></div>
    </div>
  </>
);

export default Home;
