import HeroSlider, {Overlay, Slide, MenuNav, SideNav} from "hero-slider";

const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

export default function BasicSlider() {
  return (
    <HeroSlider
      height={"100vh"}
      autoplay={{
        autoplayDuration: 4500,
        autoplayDebounce: 0,
      }}
      animations={{
        slidingAnimation: "fade",
      }}
      accessibility={{
        shouldDisplayButtons: false,
        shouldSlideOnArrowKeypress: false,
      }}
      controller={{
        initialSlide: 1,
        slidingDuration: 700,
        slidingDelay: 100,
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
      <Overlay></Overlay>

      <Slide
        shouldRenderMask
        background={{
          backgroundImageSrc: giauPass,
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundImageSrc: bogliasco,
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundImageSrc: countyClare,
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundImageSrc: craterRock,
        }}
      />
    </HeroSlider>
  );
}
