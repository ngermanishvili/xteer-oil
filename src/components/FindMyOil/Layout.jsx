import React, { useState } from "react";
import { Layout, theme } from "antd";
const { Content } = Layout;
import { Link } from "react-router-dom";
import OilContent from "./OilContent";
import SiderTabs from "./SiderTabs";
import PaginationComponent from "../Pagination/Pagination";

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
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
            className="p-5 w-full"
          >
            <PaginationComponent />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
