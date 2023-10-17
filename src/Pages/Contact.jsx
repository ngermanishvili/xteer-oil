import React from "react";
import styled from "styled-components";
import bridge from "../assets/s.jpg";
import Companies from "../components/Companies/Companies";

const Contact = () => {
  return (
    <ContactContainer>
      <ImageContainer>
        <ContactInfo>
          <div>
            <ContactDetails>
              <Location>
                <h2>Our Location</h2>
                <p>Georgia, Kutaisi</p>
                <p>Avtomshenebeli 88 (Free Industrial Zone), 4600</p>
              </Location>
              <Hours>
                <h2>Opening Hours</h2>
                <p>Monday - Friday: 09:00-18:00</p>
              </Hours>
            </ContactDetails>
            <ContactMethods>
              <ContactMethod>
                <h2>Phone</h2>
                <a href="tel:+995551627551">+995 551 627 551</a>
              </ContactMethod>
              <ContactMethod>
                <h2>Email</h2>
                <a href="mailto:info@uglubricants.com">info@uglubricants.com</a>
              </ContactMethod>
            </ContactMethods>
          </div>
          <GoogleMapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23829.941272485168!2d44.8703534!3d41.7044908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d9d3efa1247%3A0x9763e8a33b82cc9!2z4YOX4YOR4YOY4YOa4YOY4YOh4YOY4YOhIOGDluGDpuGDleGDmOGDoSDhg57hg5rhg5Dhg5bhg5A!5e0!3m2!1ska!2sge!4v1697555942744!5m2!1ska!2sge"
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
  );
};

const ContactContainer = styled.div`
  min-height: 92vh;
  margin-top: 10%;
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

const Hours = styled.div`
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
