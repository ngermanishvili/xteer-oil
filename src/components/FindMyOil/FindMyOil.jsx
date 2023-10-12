import React, {useState} from "react";
import {Layout, theme} from "antd";
import CardContent from "./CardContent";
import TabSelector from "./TabSelector";

const {Content} = Layout;

const MainLayout = () => {
  const {
    token: {colorBgContainer},
  } = theme.useToken();

  const [selectedTab, setSelectedTab] = useState("all");

  return (
    <Layout style={{marginTop: "2.5%"}}>
      <Layout>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "auto",
            background: colorBgContainer,
          }}
        >
          <TabSelector onTabChange={setSelectedTab} />
          <CardContent selectedTab={selectedTab} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
