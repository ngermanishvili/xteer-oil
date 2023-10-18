import { useState, useEffect } from "react";
import { Divider, Row } from "antd";
import CenteredImages from "../components/OurProducts/CenteredImages";
import Companies from "../components/Companies/Companies";
import BasicSlider from "../components/demoSlider/DemoSlider";
import Parallax from "../components/Parallax/Parallax";
import AboutCompany from "../components/AboutCompany/AboutCompany";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
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
      <Divider
        style={{
          fontSize: "24px",
          marginBottom: "25px",
          fontWeight: "700",
        }}
      >
        {t("ourProducts")}
      </Divider>
      <CenteredImages />
      <div style={{ padding: "50px" }}>
        <Divider
          style={{
            marginBottom: "25px",
            fontWeight: "700",
          }}
        >
          {t("aboutCompany")}
        </Divider>
        <AboutCompany />
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
        {t("partnerCompanies")}
      </Divider>
      <Companies />
      <div
        id="part-2"
        style={{
          width: "100%",
          height: "auto",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
          marginTop: "50px",
          marginBottom: "100px",
        }}
      >
        <div className="companies-container"></div>
        <Parallax />
      </div>
    </div>
  );
};

export default Home;
