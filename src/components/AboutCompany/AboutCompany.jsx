import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import gentoImg from "../../assets/bannertest.jpg";
import gentoImg2 from "../../assets/asst.jpeg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";

const companyInfo = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
sed eius magni repellat. Inventore, animi eveniet. Magnam
fugiat accusamus inventore, necessitatibus odio voluptatibus
provident reiciendis, eius, rem quasi at dignissimos. Lorem
ipsum dolor sit amet, consectetur adipisicing elit. Debitis
placeat consectetur aut id! Accusamus, quod facilis nihil
reiciendis non quas quidem iste illo rem est vero nisi et,
saepe praesentium. Lorem, ipsum dolor sit amet consectetur
adipisicing elit. Quam aliquam possimus vitae autem
molestiae! Natus accusamus et, delectus iusto inventore
deserunt vitae repudiandae provident ratione. Quis, laborum
quidem explicabo reprehenderit mollitia nobis sequi velit
aperiam corrupti eaque dolore illo labore eligendi aliquid
repellat. Magnam hic deleniti ipsa atque incidunt, quibusdam
quae illum, assumenda perspiciatis magni dicta aperiam
dolore reprehenderit nemo expedita similique facere ut non
quaerat laborum. Iusto consequatur laudantium voluptatibus
quae eligendi. Expedita voluptates similique corporis nihil
delectus odit cupiditate laudantium explicabo cum nam?
Eligendi odio ducimus, quidem itaque, quo dolorem
consectetur ipsam illo dolorum voluptatem id possimus hic.`;

const AboutCompany = () => {
  const [readMore, setReadMore] = useState(false);
  const [shouldRenderDropdown, setShouldRenderDropdown] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setShouldRenderDropdown(window.innerWidth > 1200);
    };

    // Add an event listener to handle window resize
    window.addEventListener("resize", handleWindowResize);

    // Initialize the rendering state
    handleWindowResize();

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Container>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={24} md={12} lg={12} xl={14}>
          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <ImgStyling>
              {shouldRenderDropdown && (
                <Image
                  className="img-fluid"
                  isZoomed
                  alt="NextUI Fruit Image with Zoom"
                  src={gentoImg}
                />
              )}
              <Image
                className="img-fluid2"
                isZoomed
                alt="NextUI Fruit Image with Zoom"
                src={gentoImg2}
              />
            </ImgStyling>
          </motion.div>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={10}>
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <TextStyling>
              <TextStyling2>
                <TextStyling3>
                  <Text>
                    <p>
                      {readMore
                        ? companyInfo
                        : `${companyInfo.substring(0, 500)}...`}
                      <button
                        style={{ color: "dodgerblue" }}
                        onClick={() => setReadMore(!readMore)}
                      >
                        {readMore ? "Show less" : " Read more"}
                      </button>
                    </p>
                    <br /> <Button>Learn More</Button>
                  </Text>
                </TextStyling3>
              </TextStyling2>
            </TextStyling>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutCompany;

const Container = styled.div`
 /*   */
  color: #fff;

  .img-fluid2 {
    cursor: pointer;
    width: 800px;
    height: 600px;
    padding: 10px;
  }
  .img-fluid {
    cursor: pointer;

    width: 400px;
    height: 600px;
    padding: 10px;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 700px;
  border-radius: 10px;
  height: 500px;
`;

const Text = styled.div`
  font-size: 16px;
  line-height: 1.5;
  text-align: start;
  padding: -20px 20px;
  color: #000;
`;

const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  max-width: 100px;
  padding: 5px;
  background-color: #000;
  color: #fff;
`;

const ImgStyling = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 102%;
  max-width: 1000px;
  padding: 20px 20px;
`;

const TextStyling = styled.div`
  margin-top: 24px;
  width: 102%;
  padding: 10px 20px;
  border-top: 3px solid #424242;
  border-right: 3px solid #424242;
`;

const TextStyling2 = styled.div`
  width: 102%;
  padding: 20px;
  border-top: 3px solid #424242;
  border-right: 3px solid #424242;
`;

const TextStyling3 = styled.div`
  width: 102%;
  padding: 10px;
  border-top: 3px solid #424242;
  border-right: 3px solid #424242;
`;
