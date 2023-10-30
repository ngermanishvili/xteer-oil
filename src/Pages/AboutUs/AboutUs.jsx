import React from "react";
import ContactMui from "./sections/ContactMui";
import styled from "styled-components";
import Companies from "../../components/Companies/Companies";

const AboutUs = () => {
  return (
    <>
      <Wrapper>
        <ContactMui />
      </Wrapper>
    </>
  );
};

export default AboutUs;
const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10%;

  @media (max-width: 1200px) {
    margin-top: 12%;
  }

  @media (max-width: 1000px) {
    margin-top: 12%;
  }

  @media (max-width: 768px) {
    margin-top: 15%;
  }

  @media (max-width: 420px) {
    margin-top: 20%;
  }
  @media (max-width: 420px) {
    margin-top: 20%;
  }
`;
