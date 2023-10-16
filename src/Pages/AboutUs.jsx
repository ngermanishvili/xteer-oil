import React from "react";
import test from "../assets/testingimg.jpg";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <div className="testing">
        <h1>About Our Car Oils</h1>
        <p>
          We are a trusted provider of high-quality car oils, dedicated to
          keeping your engine running smoothly and efficiently. With years of
          experience in the automotive industry, our team of experts is
          committed to delivering top-tier lubricants for your vehicles.
        </p>
        <p>
          At our core, we prioritize performance, protection, and
          sustainability. Our range of premium oils is formulated to meet and
          exceed industry standards, ensuring your engine's longevity and
          reliability. We believe that a well-maintained engine is the heart of
          every vehicle.
        </p>
        <p>
          Our commitment to environmental responsibility drives us to develop
          eco-friendly and low-emission oils that minimize the impact on our
          planet. We are constantly innovating to provide sustainable solutions
          without compromising on performance.
        </p>
        <p>
          Join us in our journey to enhance your driving experience and
          contribute to a cleaner, more sustainable future. Your trust in our
          products is our motivation to continue delivering excellence in every
          drop of oil we produce.
        </p>
      </div>
    </AboutUsContainer>
  );
};

const AboutUsContainer = styled.div`
  background-image: url(${test});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 92vh;
  /* Add additional styles for your content here */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff; /* Text color for better visibility */

  .testing {
    max-width: 900px;
    width: 90%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
  }

  @media (max-width: 768px) {
    .testing {
      width: 80%;
    }
  }

  @media (max-width: 480px) {
    .testing {
      width: 70%;
    }
  }
`;

export default AboutUs;
