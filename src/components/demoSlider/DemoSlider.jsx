import HeroSlider, { Overlay, Slide } from "hero-slider";
import styled from "styled-components";
import Slide1 from "../../assets/yellow-and-black-toned-construction-equipment-shot-in-reverse-light-wallpaper-2800x1050_88.jpg";
import Slide3 from "../../assets/yellow-and-black-toned-construction-equipment-shot-in-reverse-light-wallpaper-2800x1050_88.jpg";
import Slide2 from "../../assets/xteerbanner2.jpeg";
// import Slide4 from "../../assets/Slide4.jpg";

export default function BasicSlider() {
  const Slide4 = "https://wallpapercave.com/wp/wp2890804.jpg";
  return (
    <HeroSlider
      height={"50vh"}
      autoplay={{
        autoplayDebounce: 0,
        autoplayDuration: 4500,
      }}
      animations={{ slidingAnimation: "fade" }}
      accessibility={{
        shouldDisplayButtons: false,
        shouldSlideOnArrowKeypress: false,
      }}
      controller={{
        initialSlide: 1,
        slidingDuration: 1000,
        slidingDelay: 0,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <Slide
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: Slide1,
        }}
      >
        <Wrapper>
          <p className="Text">Only The Best Quality With Us</p>
        </Wrapper>
      </Slide>
      <Slide
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: Slide2,
        }}
      >
        <Wrapper>
          <p className="Text">Only The Best Quality With Us</p>
        </Wrapper>
      </Slide>
      <Slide
        shouldRenderMask
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: Slide3,
        }}
      >
        <Wrapper>
          <p className="Text">Only The Best Quality With Us</p>
        </Wrapper>
      </Slide>
      <Slide
        shouldRenderMask
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: Slide4,
        }}
      >
        <Wrapper>
          <p className="Text">Only The Best Quality With Us</p>
        </Wrapper>
      </Slide>
    </HeroSlider>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  background: linear-gradient(rgba(0, 0, 0, 0), #131212);
  .Text {
    font-size: 40px;
    color: white;
  }
`;
