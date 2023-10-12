import React from "react";
import { Tabs } from "antd";
import { tabStore } from "../../zustand/fitlerStore";
import { searchStore } from "../../zustand/searchStore";
const { TabPane } = Tabs;

const TabSelector = ({ size }) => {
  const setSearchQuery = searchStore((state) => state.setSearchQuery);
  const setTab = tabStore((state) => state.setTab);
  const tabItems = [
    {
      label: "ყველა",
      key: "all",
      children: "ყველა",
      path: "/",
    },
    {
      label: "ავტომობილები",
      key: "Automotive Lubricants",
      children: "ავტომობილები",
    },
    {
      label: "ჰიდრავლიკა",
      key: "Hydraulic Fluid",
      children: "ჰიდრავლიკა",
    },
    {
      label: "ინდუსტრია",
      key: "Industrial Lubricants",
      children: "ინდუსტრია",
    },
    {
      label: "მარინა",
      key: "Marine Lubricants",
      children: "მარინა",
    },
  ];

  return (
    <Tabs
      defaultActiveKey="all"
      type="card"
      size={size}
      onChange={(key) => {
        setTab(key);
        setSearchQuery("");
      }}
    >
      {tabItems.map((item) => (
        <TabPane tab={item.children} key={item.key}></TabPane>
      ))}
    </Tabs>
  );
};

export default TabSelector;
