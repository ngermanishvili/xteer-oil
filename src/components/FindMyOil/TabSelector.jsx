import React from "react";
import {Tabs} from "antd";

const {TabPane} = Tabs;

const TabSelector = ({onTabChange, size}) => {
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
        console.log(key);
        onTabChange(key);
      }}
    >
      {tabItems.map((item) => (
        <TabPane tab={item.children} key={item.key}></TabPane>
      ))}
    </Tabs>
  );
};

export default TabSelector;
