import React from "react";
import { Layout, theme } from "antd";
import CardContent from "./CardContent";
import TabSelector from "./TabSelector";
import DemoImg from "../../assets/banner.jpeg";
import { Divider } from "antd";
import { useTranslation } from "react-i18next";

const { Content } = Layout;
const MainLayout = () => {
  const { t } = useTranslation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Layout>
        <div
          id="part-1"
          style={{
            width: "100%",
            maxHeight: "30vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
          }}
        >
          <img src={DemoImg} alt="Banner Image" />
        </div>

        <Content
          style={{
            padding: "10px 15px",
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
            {t("Filter")}
          </Divider>
          <TabSelector />
          <CardContent />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
