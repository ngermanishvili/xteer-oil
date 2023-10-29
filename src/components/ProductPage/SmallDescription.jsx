import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import DownloadPds from "./DownloadPds";
const SmallDescription = ({ data }) => {
  return (
    <>
      <Container>
        <h2>
          <span>Product :</span> {data?.productName}
        </h2>
        <h3>
          <span>Category : </span>
          {data?.category}
        </h3>
        <h2>
          <span>Product Line : </span>
          {data?.productLine}
        </h2>
        <p>{data?.description}</p>
        <div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
          <span>Package Sizes : </span>
          {data?.packageSizes.map((item) => (
            <div key={item}>
              <Button size="middle" type="primary">
                {item}
              </Button>
            </div>
          ))}
        </div>
        <DownloadPds data={data} />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  margin: 0 auto;
  margin-bottom: 30px;
  color: #555;
  @media (max-width: 1160px) {
    margin-bottom: 0px;
  }
  span {
    color: black;
    font-weight: 700;
  }
  @media (max-width: 1160px) {
    font-size: 18px;
    text-align: left;
  }
`;

export default SmallDescription;
