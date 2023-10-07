import React, { useState } from "react";
import { Radio, Tabs } from "antd";

const App = () => {
  const [size, setSize] = useState("large");
  const onChange = (e) => {
    setSize(e.target.value);
  };

  const tabItems = [
    {
      label: "ყველა",
      key: "all",
      children: "ფილტრი ყველა",
      path: "/",
    },
    {
      label: "ავტომობილები",
      key: "automotive",
      children: "ფილტრი ავტომობილები",
    },
    {
      label: "ჰიდრავლიკა",
      key: "hydraulic",
      children: "ფილტრი ჰიდრავლიკა",
    },
    {
      label: "ინდუსტრია",
      key: "industrial",
      children: "ფილტრი ინდუსტრია",
    },
    {
      label: "მარინა",
      key: "marine",
      children: "ფილტრი მარინა",
    },
    {
      label: "სპეციალური",
      key: "specialty",
      children: "ფილტრი სპეციალური",
    },
  ];

  return (
    <div>
      <Radio.Group
        value={size}
        onChange={onChange}
        style={{
          marginBottom: 16,
        }}
      ></Radio.Group>
      <Tabs defaultActiveKey="all" type="card" size={size} items={tabItems} />
    </div>
  );
};

export default App;
