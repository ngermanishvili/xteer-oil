import React from "react";
import { Anchor } from "antd";
import IntroDuction from "../components/introduction";
import SwiperHeading from "../components/Swiper";
import { motion } from "framer-motion";
import { Col, Divider, Row } from "antd";
import CenteredImages from "../components/CenteredImages";
import Parallax from "../components/animate/parallax";
import Companies from "../components/Companies";
import SwiperHeading2 from "../components/Swiper2";
import AccordionComponent from "../components/Accordion";

// const Home = () => (
//   <>
//     <div style={{ padding: "20px", color: "#000" }}>
//       <Anchor direction="horizontal">
//         <Anchor.Link
//           href="#part-1"
//           title={<span style={{ color: "#000" }}>მთავარი</span>}
//         />
//         <Anchor.Link
//           href="#part-2"
//           title={<span style={{ color: "#000" }}>შესახებ</span>}
//         />
//         <Anchor.Link
//           href="#part-3"
//           title={<span style={{ color: "#000" }}>პროდუქცია</span>}
//         />
//         <Anchor.Link
//           href="#part-4"
//           title={<span style={{ color: "#fff" }}>როგორ შევუკვეთო</span>}
//         />
//         <Anchor.Link
//           href="#part-5"
//           title={<span style={{ color: "#fff" }}>კონტატი</span>}
//         />
//       </Anchor>
//     </div>
//     <div>
//       <div
//         id="part-1"
//         style={{
//           width: "100vw",
//           height: "auto",
//           textAlign: "center",
//           backgroundColor: "#097d4f",
//         }}
//       >
//         <SwiperHeading />
//       </div>
//       <div
//         id="part-2"
//         style={{
//           width: "100vw",
//           height: "200px",
//           textAlign: "center",
//           backgroundColor: "#ffffff",
//         }}
//       >
//         <IntroDuction />
//       </div>
//       <div
//         id="part-3"
//         style={{
//           width: "100vw",
//           height: "100vh",
//           textAlign: "center",
//         }}
//       />
//       <div
//         id="part-4"
//         style={{
//           width: "100vw",
//           height: "100vh",
//           textAlign: "center",
//           background: "#FFFBE9",
//         }}
//       />
//       <div
//         id="part-5"
//         style={{
//           width: "100vw",
//           height: "100vh",
//           textAlign: "center",
//           background: "#FFFBE9",
//         }}
//       />
//     </div>
//   </>
// );

const Home = () => (
  <>
    <div
      id="part-1"
      style={{
        width: "100vw",
        height: "auto",
        textAlign: "center",
        backgroundColor: "#000000",
      }}
    >
      <SwiperHeading />
    </div>
    {/* <IntroDuction /> */}
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animation on mount
        exit={{ opacity: 0, y: 40 }} // Animation on unmount
        transition={{ duration: 2 }}
        style={{
          textAlign: "center",
          color: "#000000",
          marginTop: "20px",
        }}
      >
        <Divider />
      </motion.div>
    </div>

    <CenteredImages />

    <div className="p-5"></div>
    <Divider
      style={{ backgroundColor: "#fff", fontSize: "20px", fontWeight: "800" }}
    >
      პარტნიორი კომპანიები
    </Divider>
    <Companies />
    <Divider
      style={{ backgroundColor: "#fff", fontSize: "20px", fontWeight: "800" }}
    >
      რატომ ჩვენ?
    </Divider>
    <div className="p-5"></div>

    <AccordionComponent />
  </>
);

export default Home;
