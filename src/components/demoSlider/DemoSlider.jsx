import HeroSlider, {Overlay, Slide} from "hero-slider";

import bogliasco from "../../assets/bannerslider1.jpg";
import countyClare from "../../assets/bannerslidr2.jpeg";
import craterRock from "../../assets/bannertest.jpg";

export default function BasicSlider() {
  return (
    <HeroSlider
      
      height={"70vh"}
      autoplay={{
        autoplayDuration: 6000,
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
      <Overlay>
        {/* <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <h2
            style={{
              position: "absolute",
              top: 65,
              width: "100%",
              fontSize: "64px",
              color: "#fff",
              background: "#000",
              opacity: 0.8,
              alignSelf: "right",
            }}
          >
            GENTO TRADING OIL PRODUCT
          </h2>
        </div> */}
      </Overlay>

      <Slide
        style={{objectFit: "contain"}}
        shouldRenderMask
        background={{
          backgroundImageSrc: bogliasco,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            background: "linear-gradient(rgba(0, 0, 0, 0), #131212)",
          }}
        >
          <h2
            style={{
              position: "absolute",
              bottom: "50px",
              width: "90%",
              fontSize: "42px",
              fontWeight: "700",
              color: "#fff",
              opacity: 0.9,
              alignSelf: "center",
            }}
          >
            სპეციალიზირებულია მაღალი ხარისხის ლუბრიკანტებისა და ლითონის
            კონტეინერების წარმოებაში ფართო ასორტიმენტში
          </h2>
        </div>
      </Slide>

      <Slide
        style={{objectFit: "contain"}}
        shouldRenderMask
        background={{
          backgroundImageSrc: craterRock,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            background: "linear-gradient(rgba(0, 0, 0, 0), #131212)",
          }}
        >
          <h2
            style={{
              position: "absolute",
              bottom: "50px",
              width: "90%",
              fontSize: "42px",
              fontWeight: "700",
              color: "#fff",
              alignSelf: "center",
              opacity: 0.9,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            vitae dolor ex veritatis inventore fugit nesciunt eos fugiat alias
            dolorum, sed debitis, delectus ipsa possimus.
          </h2>
        </div>
      </Slide>

      <Slide
        style={{objectFit: "contain"}}
        shouldRenderMask
        background={{
          backgroundImageSrc: craterRock,
        }}
      >
        <div
          style={{
            position: "relative",

            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            background: "linear-gradient(rgba(0, 0, 0, 0), #131212)",
          }}
        >
          {" "}
          <h2
            style={{
              position: "absolute",
              bottom: "50px",
              width: "90%",
              fontSize: "42px",
              fontWeight: "700",
              color: "#fff",
              alignSelf: "center",
              opacity: 0.9,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            vitae dolor ex veritatis inventore fugit nesciunt eos fugiat alias
            dolorum, sed debitis, delectus ipsa possimus.
          </h2>
        </div>
      </Slide>
    </HeroSlider>
  );
}
