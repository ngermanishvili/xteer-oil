import React from "react";
import styled, { keyframes, css } from "styled-components";

function Companies() {
  const row1 = [
    "https://uglubricants.com/wp-content/uploads/2023/02/png_mn.png",
    "https://uglubricants.com/wp-content/uploads/2023/02/png-rustavi.png",
    "https://uglubricants.com/wp-content/uploads/2023/02/png_azot.png",
    "https://uglubricants.com/wp-content/uploads/2023/02/png-m.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCQcc5RarkB22jlpVSmjmYZ39grOapXL0AMRf0JHChELsfELFfyzEHkyZLew22-YSQvk&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRM_fa7-xpeNSitSTX-v5zpkDJKSBFH8GC8foJ5cG&s",
  ];

  return (
    <AppContainer>
      <Wrapper>
        {/* <Text>GENTO TRADING</Text> */}
        {/* <Note>პარტნიორი კომპანიები</Note> */}
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default Companies;

const AppContainer = styled.div`
  width: 100vw;
  height: auto;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  max-width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.8) 0px 2px 8px 0px;
`;
