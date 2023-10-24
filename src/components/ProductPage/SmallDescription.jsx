import React from "react";
import styled from "styled-components";
import {Button} from "antd";
const SmallDescription = ({data}) => {
  return (
    <>
      <Container>
        <h2>
          <span>Product Name :</span> {data?.productName}
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
        <div style={{display: "flex", gap: "20px", flexDirection: "row"}}>
          <span>Package Sizes : </span>
          {data?.packageSizes.map((item) => (
            <div>
              <Button size="middle" type="primary">
                {item}
              </Button>
            </div>
          ))}
        </div>
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

  color: #555;
  span {
    color: black;
    font-weight: 800;
  }
  @media (max-width: 1160px) {
    font-size: 18px;
    text-align: left;
  }
`;

export default SmallDescription;
