import React from "react";
import SwiperHeading from "../components/Swiper/Swiper";
import {motion} from "framer-motion";
import {Divider, Row} from "antd";
import CenteredImages from "../components/OurProducts/CenteredImages";
import Companies from "../components/Companies/Companies";
import AccordionComponent from "../components/Accordion/Accordion";
import BasicSlider from "../components/demoSlider/DemoSlider";
const Home = () => (
  <>
    <div
      id="part-1"
      style={{
        width: "100%",
        height: "auto",
        textAlign: "center",
        backgroundColor: "#000000",
      }}
    >
      <BasicSlider />
    </div>

    <CenteredImages />

    <div className="p-5"></div>
    <Divider
      style={{backgroundColor: "#fff", fontSize: "2rem", fontWeight: "800"}}
    >
      პარტნიორი კომპანიები
    </Divider>
    <div className="companies-container">
      <Companies />
    </div>
    <Divider
      style={{backgroundColor: "#fff", fontSize: "20px", fontWeight: "800"}}
    >
      რატომ ჩვენ?
    </Divider>
    <div className="p-5"></div>

    <AccordionComponent />
  </>
);

export default Home;
