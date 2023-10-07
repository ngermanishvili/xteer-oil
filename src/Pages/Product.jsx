import React from "react";

import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Content, Footer, Sider } = Layout;
import BadgeContent from "../components/ProductPage/Badge";
import ImageContent from "../components/ProductPage/ImageContent";
import DownloadPdS from "../components/ProductPage/Download";
import Specifications from "../components/ProductPage/Specification";
import CaModal from "../components/ProductPage/CaModal";

const Product = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>მთავარი</Breadcrumb.Item>
          <Breadcrumb.Item>პროდუქტები</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
          }}
        >
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            <div className="gento-img">
              <ImageContent />
            </div>
            <DownloadPdS />
            <CaModal />
            <div className="p-5"></div>
            <BadgeContent />
            <div className="p-5"></div>
            <Specifications />
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        ©2023 Created by Gento Trading
      </Footer>
    </Layout>
  );
};
export default Product;
