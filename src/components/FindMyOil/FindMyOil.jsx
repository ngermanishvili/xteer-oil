import React, { useState } from "react";
import { Layout, theme } from "antd";
import SiderTabs from "./SiderTabs";
import CardContent from "./CardContent";
import SearchComponent from "./Serch";
const { Content } = Layout;
import Banner from '../../assets/bannerslider1.jpg'

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  return (
    <Layout>
         <div
      id="part-1"
      style={{
        width: "100%",
        height: "200px",
      }}
    >
     <img src={Banner} alt="banner" />
    </div>
   
      <Layout>
      <SiderTabs />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "auto",
            background: colorBgContainer,
          }}
        >
          <SearchComponent onSearch={setSearchQuery} />
          <CardContent searchQuery={searchQuery} /> 
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
