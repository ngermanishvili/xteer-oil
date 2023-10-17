import React from "react";
import styled from "styled-components";

function MapComponent() {
  return (
    <div style={{ width: "40%", height: "400px" }}>
      <iframe
        width="100%"
        height="100%"
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23620.120191035945!2d42.64662050611315!3d42.26752827700478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c8ce30e54af2d%3A0xfbec41b2d626656f!2sKutaisi!5e0!3m2!1sen!2sge!4v1697465114426!5m2!1sen!2sge"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MapComponent;

const Iframe = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0), #131212);
`;
