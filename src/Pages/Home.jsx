import React from "react";

import {Divider, Row} from "antd";
import CenteredImages from "../components/OurProducts/CenteredImages";
import Companies from "../components/Companies/Companies";
import BasicSlider from "../components/demoSlider/DemoSlider";
import AboutUs from "../components/AboutUs/About";
import AboutCompany from "../components/AboutCompany/AboutCompany";

const Home = () => (
  <>
    <div
      id="part-1"
      style={{
        width: "100%",
        height: "auto",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        marginTop: "78px",
      }}
    >
      <BasicSlider />

      <div
        id="part-1"
        style={{
          width: "100%",
          height: "auto",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div className="p-2"></div>

        {/* <CenteredImages /> */}
      </div>

      <Divider
        style={{
          fontSize: "24px",
          marginBottom: "25px",
          fontWeight: "700",
        }}
      >
        ჩვენი პროდუქცია
      </Divider>

      <CenteredImages />

      <Divider
        style={{
          fontSize: "24px",
          marginBottom: "25px",
          fontWeight: "700",
        }}
      />

      <div
        id="part-2"
        style={{
          width: "100%",
          height: "auto",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div className="companies-container"></div>
        <AboutUs />
      </div>
      <Divider
        orientation="center"
        type="horizontal"
        style={{
          fontSize: "24px",
          borderTop: "1px solid #003f98",
          fontWeight: "700",
          borderBottom: "1px solid #003f98",
        }}
      >
        პარტნიორი კომპანიები
      </Divider>
      <Companies />

      <div style={{padding: "50px"}}>
        <Divider
          style={{
            marginBottom: "25px",
            fontWeight: "700",
          }}
        >
          ჩვენს შესახებ
        </Divider>
        <AboutCompany />
      </div>
      <div className="p-2"></div>
    </div>

    <Divider
      style={{
        marginBottom: "25px",
        fontWeight: "700",
      }}
    >
      პარტნიორი კომპანიები
    </Divider>
    <div
      id="part-2"
      style={{
        width: "100%",
        height: "auto",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div className="companies-container"></div>
    </div>
  </>
);

export default Home;
