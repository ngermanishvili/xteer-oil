import React from "react";
import { Tabs } from "antd";
import { tabStore } from "../../zustand/fitlerStore";
import { searchStore } from "../../zustand/searchStore";
import { useTranslation } from "react-i18next";

const TabSelector = () => {
  const setSearchQuery = searchStore((state) => state.setSearchQuery);
  const setTab = tabStore((state) => state.setTab);

  const { t } = useTranslation();

  const tabItems = [
    { label: t("all"), key: "all" },
    { label: t("Automotive Lubricants"), key: "Automotive Lubricants" },
    { label: t("Hydraulic Fluid"), key: "Hydraulic Fluid" },
    { label: t("Industrial Lubricants"), key: "Industrial Lubricants" },
    { label: t("Marine Lubricants"), key: "Marine Lubricants" },
  ];

  return (
    <Tabs
      defaultActiveKey="all"
      type="card"
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
