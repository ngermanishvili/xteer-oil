import React from "react";
import { Table } from "antd";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const Specifications = () => (
  <Table columns={columns} dataSource={data} onChange={onChange} />
);
export default Specifications;
