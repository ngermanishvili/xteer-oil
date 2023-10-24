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
  margin-top: 8%;
`;
