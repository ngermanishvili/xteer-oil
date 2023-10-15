import React from "react";
import { Card, Col, Row } from "antd";
import Logo1 from "../../assets/agrinolpng.png";
import Logo2 from "../../assets/azmolas.png";
import Logo3 from "../../assets/azot.png";
import styled from "styled-components";

const CenteredImages = () => (
  <Wrapper>
    <Row className="rowcontainer" gutter={16}>
      <Col span={8}>
        <Card className="coll2" bordered={false}>
          <img src={Logo1} alt="samxar she kleo" />
        </Card>
      </Col>
      <Col span={8}>
        <Card className="coll" bordered={false}>
          <img src={Logo2} alt="samxar she kleo" />
        </Card>
      </Col>
      <Col span={8}>
        <Card className="coll2" bordered={false}>
          <img src={Logo1} alt="samxar she kleo" />
        </Card>
      </Col>
    </Row>
  </Wrapper>
);

const Wrapper = styled.div`
  .rowcontainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 50px;
  }
  .coll {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    background-color: #ffffff;
  }
  .coll2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    background-color: rgb(16, 45, 49);
  }
`;
export default CenteredImages;
