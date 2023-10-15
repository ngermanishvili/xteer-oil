import FadeUpContainer from "./FadeUpContainer";
import { m, LazyMotion, domAnimation } from "framer-motion";
import styled from "styled-components";

export default function HeaderSection() {
  return (
    <MainHeader>
      <AppHeader>
        <FadeUpContainer> My </FadeUpContainer>{" "}
        <FadeUpContainer delay={0.2}> Art </FadeUpContainer>{" "}
        <FadeUpContainer delay={0.4}> Gallery </FadeUpContainer>
      </AppHeader>
    </MainHeader>
  );
}

const MainHeader = styled.header``;

const AppHeader = styled.h1`
  margin: 0 0 0.35rem;
  font-weight: 700;
  font-size: 3.5em;
`;
