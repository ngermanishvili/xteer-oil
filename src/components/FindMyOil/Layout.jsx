import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
const { Header, Sider, Content } = Layout;
import { Link } from "react-router-dom";
import OilContent from "./OilContent";
import SiderTabs from "./SiderTabs";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
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
