import React, { useState } from "react";
import { Radio, Tabs } from "antd";
import styled from "styled-components";

const App = () => {
  const [size, setSize] = useState("large");
  const onChange = (e) => {
    setSize(e.target.value);
  };

  const tabItems = [
    {
      label: "ყველა",
      key: "all",
      path: "/",
    },
    {
      label: "ავტომობილები",
      key: "Automotive Lubricants",
    },
    {
      label: "ჰიდრავლიკა",
      key: "Hydraulic Fluid",
    },
    {
      label: "ინდუსტრია",
      key: "Industrial Lubricants",
    },
    {
      label: "მარინა",
      key: "Marine Lubricants",
    },
    {
      label: "სპეციალური",
      key: "specialty",
    },
  ];

  return (
    <Wrapper>
      <Radio.Group
    
        value={size}
        onChange={onChange}
        style={{
          marginBottom: 16,
        }}
      ></Radio.Group>
      <Tabs className="tabItems" defaultActiveKey="all" type="card" size={size} items={tabItems} />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
width: 100%;
background-color: transparent;

.tabItems {
  margin-left: 20px;
  font-weight: 700;
}
`
