import React from "react";
import { Col, Row } from "antd";
import gentoImg from "../../assets/bannertest.jpg";
import styled from "styled-components";
import Companies from "../Companies/Companies";
import CenteredImages from "../OurProducts/CenteredImages";

const AboutCompany = () => {
  return (
    <Container>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={24} md={12} lg={12} xl={14}>
          <ImgStyling>
            <StyledImg
              className="gentotrd"
              src={gentoImg}
              alt="Company Banner"
            />
          </ImgStyling>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={10}>
          <TextStyling>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et sed
              eius magni repellat. Inventore, animi eveniet. Magnam fugiat
              accusamus inventore, necessitatibus odio voluptatibus provident
              reiciendis, eius, rem quasi at dignissimos. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Debitis placeat consectetur
              aut id! Accusamus, quod facilis nihil reiciendis non quas quidem
              iste illo rem est vero nisi et, saepe praesentium. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Quam aliquam possimus
              vitae autem molestiae! Natus accusamus et, delectus iusto
              inventore deserunt vitae repudiandae provident ratione. Quis,
              laborum quidem explicabo reprehenderit mollitia nobis sequi velit
              aperiam corrupti eaque dolore illo labore eligendi aliquid
              repellat. Magnam hic deleniti ipsa atque incidunt, quibusdam quae
              illum, assumenda perspiciatis magni dicta aperiam dolore
              reprehenderit nemo expedita similique facere ut non quaerat
              laborum. Iusto consequatur laudantium voluptatibus quae eligendi.
              Expedita voluptates similique corporis nihil delectus odit
              cupiditate laudantium explicabo cum nam? Eligendi odio ducimus,
              quidem itaque, quo dolorem consectetur ipsam illo dolorum
              voluptatem id possimus hic.
              <br /> <Button>Learn More</Button>
            </Text>
          </TextStyling>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutCompany;

const Container = styled.div`
  display: flex;
  color: #fff;
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 700px;
  border-radius: 10px;
  height: auto;
`;

const Text = styled.div`
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  padding: -20px 20px;
  color: #000;
  margin-top: 100px;
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
  padding: 25px 10px;
  border-bottom: 3px solid #003f98;
  border-right: 3px solid #003f98;
`;

const TextStyling = styled.div`
  width: 102%;
  padding: 20px;
  border-top: 3px solid #003f98;
  border-right: 3px solid #003f98;
`;
