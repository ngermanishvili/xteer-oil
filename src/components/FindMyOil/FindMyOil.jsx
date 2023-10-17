import React from "react";
import { Layout, theme } from "antd";
import CardContent from "./CardContent";
import TabSelector from "./TabSelector";
import DemoImg from "../../assets/banner.jpeg";
import { Divider } from "antd";

const { Content } = Layout;
const MainLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ marginTop: "2.5%" }}>
      <Layout>
        <div
          id="part-1"
          style={{
            width: "100%",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
          }}
        >
          <img src={DemoImg} alt="asd" />
        </div>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "auto",
            background: colorBgContainer,
          }}
        >
          <Divider
            orientation="left"
            style={{
              fontSize: "24px",

              fontWeight: "700",
            }}
          >
            ფილტრი
          </Divider>
          <TabSelector />
          <CardContent />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
