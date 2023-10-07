import React from "react";
import { Badge, Card, Space } from "antd";
import { Divider, List, Typography } from "antd";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];
const data2 = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];
const data3 = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const BadgeContent = () => (
  <Space
    direction="vertical"
    size="middle"
    style={{
      width: "100%",
    }}
  >
    <Badge.Ribbon text="GENTO">
      <Card title="Features and Benefits" size="small">
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text mark>[GENTO]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="blue">
      <Card title="Applications" size="small">
        <List
          dataSource={data2}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text mark>[GENTO]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="blue">
      <Card
        title="Certification / Approval / Performance Standard"
        size="small"
      >
        <List
          dataSource={data3}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text mark>[GENTO]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </Card>
    </Badge.Ribbon>
  </Space>
);
export default BadgeContent;
