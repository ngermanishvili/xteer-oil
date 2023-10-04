import React from "react";
import { Anchor } from "antd";
import IntroDuction from "../components/introduction";
import SwiperHeading from "../components/Swiper";

const Home = () => (
  <>
    <div style={{ padding: "20px", color: "#000" }}>
      <Anchor direction="horizontal">
        <Anchor.Link
          href="#part-1"
          title={<span style={{ color: "#000" }}>მთავარი</span>}
        />
        <Anchor.Link
          href="#part-2"
          title={<span style={{ color: "#000" }}>შესახებ</span>}
        />
        <Anchor.Link
          href="#part-3"
          title={<span style={{ color: "#000" }}>პროდუქცია</span>}
        />
        <Anchor.Link
          href="#part-4"
          title={<span style={{ color: "#fff" }}>როგორ შევუკვეთო</span>}
        />
        <Anchor.Link
          href="#part-5"
          title={<span style={{ color: "#fff" }}>კონტატი</span>}
        />
      </Anchor>
    </div>
    <div>
      <div
        id="part-1"
        style={{
          width: "100vw",
          height: "auto",
          textAlign: "center",
          backgroundColor: "#097d4f",
        }}
      >
        <SwiperHeading />
      </div>
      <div
        id="part-2"
        style={{
          width: "100vw",
          height: "200px",
          textAlign: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <IntroDuction />
      </div>
      <div
        id="part-3"
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
        }}
      />
      <div
        id="part-4"
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          background: "#FFFBE9",
        }}
      />
      <div
        id="part-5"
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          background: "#FFFBE9",
        }}
      />
    </div>
  </>
);

export default Home;
