import {useEffect} from "react";
import styled from "styled-components";
import {useAnimation, motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {Spinner} from "@nextui-org/react";

const Title = styled.h2`
  font-size: 5rem;
  font-weight: 600;
`;

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

const BackgroundImageContainer = styled.div`
  /*  background-image: url("../../assets/gento.jpg"); */
  background-size: cover;
  background-position: center;
  // Add any other background styles you need here
`;

export default function AnimatedTitle() {
  const text = "GENTO TRADING LTD - ჯენტო თრეიდინგი";
  const ctrls = useAnimation();

  const {ref, inView} = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.38em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.58, 0.4, 0.8],
      },
    },
  };

  return (
    <BackgroundImageContainer>
      <Title aria-label={text} role="heading">
        {text.split(" ").map((word, index) => {
          return (
            <Word
              ref={ref}
              aria-hidden="true"
              key={index}
              initial="hidden"
              animate={ctrls}
              variants={wordAnimation}
              transition={{
                delayChildren: index * 0.28,
                staggerChildren: 0.08,
              }}
            >
              {word.split("").map((character, index) => {
                return (
                  <Character
                    aria-hidden="true"
                    key={index}
                    variants={characterAnimation}
                  >
                    {character}
                  </Character>
                );
              })}
            </Word>
          );
        })}
      </Title>
    </BackgroundImageContainer>
  );
}
