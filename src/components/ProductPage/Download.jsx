import React, { useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Radio, Space, Divider } from "antd";
const App = () => {
  const [size, setSize] = useState("medium");

  return (
    <>
      <Space direction="vertical">
        <Space wrap>
          <span>Download MSDS/PDS</span>

          <Button
            style={{
              color: "black",
              marginRight: "50px",
            }}
            type="primary"
            icon={<DownloadOutlined />}
            size={size}
          >
            გადმოწერა
          </Button>
        </Space>
      </Space>
    </>
  );
};
export default App;
