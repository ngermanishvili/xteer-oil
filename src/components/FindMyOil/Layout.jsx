import React from "react";
import { Layout, theme } from "antd";
const { Content } = Layout;
import OilContent from "./OilContent";
import SiderTabs from "./SiderTabs";

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
          <OilContent />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
