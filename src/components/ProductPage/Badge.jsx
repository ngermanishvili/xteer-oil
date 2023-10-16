import React from "react";
import {Badge, Card, Col, Row, Space} from "antd";
import {List, Typography} from "antd";
import styled from "styled-components";

const BadgeContent = ({product}) => {
  const allSpecs = [];
  for (const [property, values] of Object.entries(product.specs)) {
    allSpecs.push({property, values});
  }

  return (
    <Wrapper>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Badge.Ribbon text="Applications">
            <Card title="Applications" size="large">
              <List
                dataSource={product.applications}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>
          </Badge.Ribbon>
        </Col>
        <Col span={6}>
          <Badge.Ribbon text="Features and benefits">
            <Card title="Features and Benefits" size="large">
              <List
                dataSource={product.featuresAndBenefits}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>
          </Badge.Ribbon>
          */
        </Col>
        <Col span={6}>
          <Badge.Ribbon text="Certifications">
            <Card
              title="Certification / Approval / Performance Standard"
              size="large"
            >
              <List
                dataSource={product.certsAndApps}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>
          </Badge.Ribbon>
        </Col>
        <Col span={6}>
          <Badge.Ribbon text="Specs">
            <Card title="Specifications" size="large">
              <List
                dataSource={allSpecs}
                renderItem={(item) => (
                  <List.Item>
                    <Typography.Text mark></Typography.Text>
                    {item.property}: {}
                  </List.Item>
                )}
              />
            </Card>
          </Badge.Ribbon>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  height: auto;
`;

export default BadgeContent;
