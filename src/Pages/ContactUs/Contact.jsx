import React from "react";
import styled from "styled-components";
import bridge from "../../assets/images/examples/wp7902092-oil-gas-wallpapers.jpg";
import Companies from "../../components/Companies/Companies";
import MKBox from "../../components/MKBox";
import Card from "@mui/material/Card";
import Profile from "./sections/Profile";
import bgImage from "../../assets/images/examples/wp7902092-oil-gas-wallpapers.jpg";
import MKTypography from "../../components/MKTypography";

const Contact = () => {
  return (
    <>
      <ContactContainer>
        <MKBox bgColor="white">
          <MKBox
            minHeight="10rem"
            width="100%"
            sx={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "grid",
              placeItems: "center",
            }}
          />
          <Card
            sx={{
              p: 2,
              mx: { xs: 2, lg: 3 },
              mt: -8,
              mb: 4,
              backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
                rgba(white.main, 0.8),
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
            }}
          >
            <Profile />
          </Card>
        </MKBox>
        <ImageContainer>
          <ContactInfo>
            <div>
              <ContactDetails>
                <Location>
                  <MKTypography color="white" variant="h2">
                    Tbilisi, Georgia
                  </MKTypography>
                  <MKTypography color="white" variant="h2">
                    57 Archangelo Lamberti Street, Tbilisi
                  </MKTypography>
                </Location>
              </ContactDetails>
              <ContactMethods>
                <ContactMethod>
                  <MKTypography color="white" variant="h2">
                    Phone
                  </MKTypography>
                  <a href="tel:+995551627551">+995 577 51 22 80</a>
                </ContactMethod>
                <ContactMethod>
                  <MKTypography color="white" variant="h2">
                    Email
                  </MKTypography>
                  <a href="mailto:info@uglubricants.com">geotrd@gmail.com</a>
                </ContactMethod>
              </ContactMethods>
            </div>
            <GoogleMapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.887144640951!2d44.73205411226945!3d41.78764577113191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446e04b8e65e81%3A0x2366483109f1f143!2s57%20Arkanjelo%20Lamberti%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1698576768459!5m2!1sen!2sge"
                width="100%"
                height="450"
                style={{ borderRadius: "10px" }}
              ></iframe>
            </GoogleMapContainer>
          </ContactInfo>
        </ImageContainer>
        <CompaniesSliderContainer>
          <Companies />
        </CompaniesSliderContainer>
      </ContactContainer>
    </>
  );
};

const ContactContainer = styled.div`
  min-height: 100vh;
  color: #fff;
`;

const GoogleMapContainer = styled.div`
  max-width: 600px;
  width: 100%;
  @media (max-width: 900px) {
    max-width: none;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-image: url(${bridge});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ContactInfo = styled.div`
  width: 100%;
  background-color: rgba(16, 45, 49, 0.7);
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 900px) {
    display: block;
  }
`;

const ContactDetails = styled.div`
  flex: 1;
  padding: 20px;
  h2 {
    font-size: 1.5rem;
  }
`;

const Location = styled.address`
  p {
    margin: 5px 0;
  }
`;

const ContactMethods = styled.div`
  flex: 1;
  padding: 20px;
  h2 {
    font-size: 1.5rem;
  }
`;
const CompaniesSliderContainer = styled.div`
  margin-top: 25px;
`;
const ContactMethod = styled.div`
  p {
    margin: 5px 0;
  }
  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Contact;
