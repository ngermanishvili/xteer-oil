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
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image>
                  <img
                    style={{ width: "100%", objectFit: "contain" }}
                    src={el}
                  />
                </Image>
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el}>
                  <img
                    style={{ width: "100%", objectFit: "contain" }}
                    src={el}
                  />
                </Image>
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  margin: 0 auto;
  width: 90vw;
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
  overflow: hidden;
  overflow-x: hidden;
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
  width: 1500px;
  overflow-x: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 5%,
    hsl(0 0% 0% / 1) 95%,
    hsl(0 0% 0% / 0)
  );
`;
const ImageGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 1500px; // increased the width
  margin-left: 50px; // increased the margin
  margin-right: 50px; // increased the margin

  padding: 5px;
  width: 160px;
  margin-left: 30px;
  margin-right: 30px;

  @media (max-width: 600px) {
    width: 120px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;
const Image = styled.div`
  max-width: 100%;
  max-height: 100%;
  width: 200px;
  height: auto;
  border-radius: 0.5rem;

  @media (max-width: 600px) {
    max-width: 80%;
    max-height: 80%;
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
  animation: ${scrollX} 30s linear infinite; // increased the animation duration

  @media (max-width: 600px) {
    animation: ${scrollX} 10s linear infinite;
  }
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

export default Companies;
