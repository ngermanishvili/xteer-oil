import { Col, Divider, Row } from "antd";
import Logo1 from "../../assets/energopro.png";
import Logo2 from "../../assets/azot.png";
import Logo3 from "../../assets/telasi.png";
import styled from "styled-components";

const ImageContainer = styled.div`
  max-width: 100%;
  width: 400px;
  padding: 10px;
  height: 150px;
  border-radius: 15px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Companies = () => {
  return (
    <Wrapper>
      <Row
        gutter={16}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col span={6} xs={8} sm={6} md={6} lg={8}>
          <ImageContainer>
            <Image src={Logo1} alt="" />
          </ImageContainer>
        </Col>
        <Col span={6} xs={8} sm={8} md={8} lg={8}>
          <ImageContainer>
            <Image src={Logo2} alt="" />
          </ImageContainer>
        </Col>
        <Col span={6} xs={8} sm={8} md={6} lg={6}>
          <ImageContainer>
            <Image src={Logo2} alt="" />
          </ImageContainer>
        </Col>
      </Row>
      <SpacingContent />
      <Row
        gutter={16}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col span={6} xs={8} sm={6} md={6} lg={8}>
          <ImageContainer>
            <Image src={Logo1} alt="" />
          </ImageContainer>
        </Col>
        <Col span={6} xs={8} sm={8} md={8} lg={8}>
          <ImageContainer>
            <Image src={Logo2} alt="" />
          </ImageContainer>
        </Col>
        <Col span={6} xs={8} sm={8} md={6} lg={6}>
          <ImageContainer>
            <Image src={Logo2} alt="" />
          </ImageContainer>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Companies;

const SpacingContent = styled.div`
  width: 100%;
  height: 50px;
`;

const Wrapper = styled.div`
  padding: 80px;
  margin: 0 auto;
  background-color: #00559d;
  width: 92%;
  border-radius: 15px;
  padding: 50px 50px;
`;
