import React from "react";
import styled from "styled-components";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import CardBg from "../../assets/capasities-scaled.jpg";
import cardImage1 from "../../assets/xteerlogo.png";
import cardImage2 from "../../assets/agrinolpng.png";
import cardImage3 from "../../assets/azmol.png";
import CenteredImages from "../OurProducts/CenteredImages";
import Companies from "../Companies/Companies";

const About = () => {
  const { scrollYProgress } = useViewportScroll();
  const imgContainerYRange = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const cardsYRange = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <Wrapper>
      <ParallaxContainer>
        <motion.div style={{ y: imgContainerYRange }} className="parallax">
          <ImgContainer>
            <img className="imgcont" src={CardBg} alt="background" />
          </ImgContainer>
        </motion.div>
        <CardContainer>
          {/* <div style={{ backgroundColor: "#fff" }}>
            <Companies />
          </div> */}
          {/* <Card
            title="Title 2"
            imgSrc={cardImage2}
            description="Description 2"
            yRange={cardsYRange}
          />
          <Card
            title="Title 1"
            imgSrc={cardImage1}
            description="Description 1"
            yRange={cardsYRange}
          />
          <Card
            title="Title 3"
            imgSrc={cardImage3}
            description="Description 3"
            yRange={cardsYRange}
          /> */}
        </CardContainer>
      </ParallaxContainer>
    </Wrapper>
  );
};

const Card = ({ title, imgSrc, description, yRange }) => (
  <StyledCard style={{ y: yRange }}>
    <img src={imgSrc} alt={title} />
  </StyledCard>
);

export default About;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 50vh;
`;

const ParallaxContainer = styled.div`
  position: relative;
  height: 100vh;
`;

const ImgContainer = styled.div`
  .imgcont {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    object-fit: cover;
    filter: brightness(50%);
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    gap: 2rem;

    .imgcont {
      width: 100%;
      height: 1000px;
    }
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    gap: 2rem;

    .imgcont {
      width: 100%;
      height: 1000px;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translate(-20%, -30%);
  padding: 0;
  max-width: 1000px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    gap: 2rem; /* Adjust the gap between cards for mobile */
  }
`;

const StyledCard = styled(motion.div)`
  width: 600px;
  height: auto;
  background: #5380c0;
  border-radius: 20px;
  padding: 20px;

  text-align: center;
  overflow: hidden;
  transition: transform 0.3s;

  h3 {
    margin-bottom: 20px;
    text-align: left; /* Align text left on small screens */
  }

  img {
    max-width: 100%;
    object-fit: contain;
    margin-bottom: 20px;
  }

  p {
    margin-top: 20px;
    text-align: left; /* Align text left on small screens */
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
