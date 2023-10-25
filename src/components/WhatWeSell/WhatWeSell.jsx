import React from "react";
import styled from "styled-components";
import Marine from "../../assets/WhatWeSell/Marine.jpg";
import Automotive from "../../assets/WhatWeSell/Automotive.jpg";
import Hydraulic from "../../assets/WhatWeSell/Hydraulic.jpg";
import Industrial from "../../assets/WhatWeSell/Industrial.jpg";
import { Link } from "react-router-dom";

const WhatWeSell = () => {
  const items = [
    {
      imageUrl: Automotive,
      categorie: "Automotive",
      title: "XTeer TOP Prime",
      description:
        "XTeer TOP is a premium performance engine oil formulated from 100% synthetic base fluids. XTeer TOP is a premium performance engine oil formulated from 100% synthetic base fluids.",
    },
    {
      imageUrl: Hydraulic,
      categorie: "Hydraulic",
      title: "XTeer HVI",
      description:
        "XTeer HVI is the best high viscosity anti-wear hydraulic oil.",
    },
    {
      imageUrl: Industrial,
      categorie: "Industrial",
      title: "XTeer Grease",
      description:
        "XTeer Grease series are very suitable for general use, as it is based on high-refined mineral oil and blended with various additives appropriately.",
    },
    {
      imageUrl: Marine,
      categorie: "Marine",
      title: "XTeer TPEO 12&15 series",
      description:
        "XTeer TPEO 12 and 15 series of products are premium performance trunk piston engine oils designed for use in medium-speed diesel engines operating exclusively on distillate fuels.",
    },
  ];

  const smoothScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <CardContainer>
      {items.map((item, index) => (
        <Link to="/find-my-oil" key={index} onClick={smoothScrollToTop}>
          <Card>
            <CardImage src={item.imageUrl} alt={item.title} />
            <CardTitle>{item.title}</CardTitle>
            <CardCategory>{item.categorie}</CardCategory>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Adjust the gap between cards */
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  margin: 15px;
  width: 300px;
  height: 450px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const CardCategory = styled.p`
  font-size: 1rem;
  color: #888;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  overflow: auto;
  max-height: 100px;
`;

export default WhatWeSell;
