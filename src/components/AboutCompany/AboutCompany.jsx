import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import gentoImg from "../../assets/bannertest.jpg";
import gentoImg2 from "../../assets/asst.jpeg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
//
const companyInfo =
  "GentoTrading, headquartered in Kutaisi, Georgia, is a prominent oil company with a rich history of serving the region's energy needs. As a leading provider of petroleum products and energy solutions, GentoTrading plays a vital role in fueling both domestic and industrial sectors in Georgia. With a commitment to quality and sustainability, the company has established itself as a trusted partner in the oil and energy industry. GentoTrading's operations encompass the supply of various petroleum products, including gasoline, diesel, and lubricants, while also focusing on innovative solutions to meet evolving energy demands. Their dedication to excellence and customer satisfaction has solidified their position as an industry leader in the region.";

const AboutCompany = () => {
  const { t, i18n } = useTranslation();
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
                        ? t("gentoInfo")
                        : `${t("gentoInfo").substring(0, 500)}...`}
                      <button
                        style={{ color: "dodgerblue" }}
                        onClick={() => setReadMore(!readMore)}
                      >
                        {readMore ? t("showLess") : t("readMore")}
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
