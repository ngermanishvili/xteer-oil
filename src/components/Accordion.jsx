import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import styled from "styled-components";

export default function AccordionComponent() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Wrapper>
      <Accordion variant="bordered">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="სრულად სინთეზური"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="მაღალი შესრულება"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="აკმაყოფილებს API SN/CF მოთხოვნებს"
        >
          {defaultContent}
        </AccordionItem>{" "}
        <AccordionItem
          key="4"
          aria-label="Accordion 3"
          title="ექსტრემალურ დატვირთვის პირობებში ის უზრუნველყოფს ძრავის მაქსიმალურ დაცვას."
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="5"
          aria-label="Accordion 3"
          title="ის გთავაზობთ ძრავის მაქსიმალურ მუშაობას ყველაზე მოთხოვნად პირობებში."
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="6"
          aria-label="Accordion 3"
          title="კლასებისთვის რეკომენდებულია გოგირდის საწვავი 15ppm ან მეტი."
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
      <ImageContaier>
        <img />
      </ImageContaier>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 0 60px;
  background-color: #beb8b8;
`;
