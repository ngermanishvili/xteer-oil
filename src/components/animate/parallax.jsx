import { useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import logo1 from "../../assets/energopro.png";
import logo2 from "../../assets/telasi.png";
import logo3 from "../../assets/azot.png";
import styled from "styled-components";

function ParallaxText({ baseVelocity = 100 }) {
  const x = useMotionValue(0);
  const directionFactor = useRef(1);
  const controls = useAnimation();

  useEffect(() => {
    const animateLoop = async () => {
      let previousTimestamp = null;

      const animationStep = (timestamp) => {
        if (!previousTimestamp) {
          previousTimestamp = timestamp;
        }

        const delta = timestamp - previousTimestamp;
        previousTimestamp = timestamp;

        const moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        x.set(x.get() + moveBy);

        if (x.get() >= window.innerWidth) {
          x.set(-200); // Adjust the value as needed
        }

        requestAnimationFrame(animationStep);
      };

      animationStep(0);
    };

    animateLoop();
  }, [controls, x, baseVelocity]);

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x, display: "flex" }}>
        <LogoStyle src={logo1} alt="Logo 1" />
        <LogoStyle src={logo2} alt="Logo 2" />
        <LogoStyle src={logo3} alt="Logo 3" />
        <LogoStyle src={logo1} alt="Logo 1" />
        <LogoStyle src={logo2} alt="Logo 2" />
        <LogoStyle src={logo3} alt="Logo 3" />
        <LogoStyle src={logo1} alt="Logo 1" />
        <LogoStyle src={logo2} alt="Logo 2" />
        <LogoStyle src={logo3} alt="Logo 3" />{" "}
        <LogoStyle src={logo1} alt="Logo 1" />
        <LogoStyle src={logo2} alt="Logo 2" />
        <LogoStyle src={logo3} alt="Logo 3" />
      </motion.div>
    </div>
  );
}

function Parallax() {
  return (
    <section>
      <ParallaxText baseVelocity={0} />
    </section>
  );
}

export default Parallax;

const LogoStyle = styled.img`
  padding: 10px;
  width: 100%;
  max-width: 200px;
  height: auto;
  object-fit: contain;
`;
