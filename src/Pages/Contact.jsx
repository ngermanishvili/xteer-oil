import React from "react";
import styled from "styled-components";
import bridge from "../assets/s.jpg";
import Companies from "../components/Companies/Companies";
const Contact = () => {
  return (
    <ContactContainer>
      <ImageContainer>
        <ContactInfo>
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
  max-width: 900px;
  width: 90%;
  background-color: rgba(16, 45, 49, 0.7);
  padding: 20px;
  border-radius: 10px;
  /*  display: flex;
  flex-direction: row; */
  @media (max-width: 750px) {
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
