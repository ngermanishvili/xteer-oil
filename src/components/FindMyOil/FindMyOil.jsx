import React from "react";
import { Layout, theme } from "antd";
import SiderTabs from "./SiderTabs";
import CardContent from "./CardContent";

const { Content } = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <SiderTabs />
      <Layout>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "auto",
            background: colorBgContainer,
          }}
        >
          <CardContent />
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
            className="p-5 w-full"
          ></div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
