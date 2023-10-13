import React from "react";
import {Tabs} from "antd";
import {tabStore} from "../../zustand/fitlerStore";
import {searchStore} from "../../zustand/searchStore";

const TabSelector = ({size}) => {
  const setSearchQuery = searchStore((state) => state.setSearchQuery);
  const setTab = tabStore((state) => state.setTab);

  const tabItems = [
    {label: "ყველა", key: "all"},
    {label: "ავტომობილები", key: "Automotive Lubricants"},
    {label: "ჰიდრავლიკა", key: "Hydraulic Fluid"},
    {label: "ინდუსტრია", key: "Industrial Lubricants"},
    {label: "მარინა", key: "Marine Lubricants"},
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
      items={tabItems.map((item) => ({
        key: item.key,
        label: item.label,
      }))}
    />
  );
};

export default TabSelector;
