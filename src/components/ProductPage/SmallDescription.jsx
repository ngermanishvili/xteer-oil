import React from "react";
import styled from "styled-components";
import {Button} from "antd";
import view from "../../assets/view.svg";
import download from "../../assets/download.svg";
const SmallDescription = ({data}) => {
  console.log(data);
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
        <div style={{display: "flex", gap: "20px", flexDirection: "row"}}>
          {data?.pdfUrls?.map((item) => (
            <div style={{width: "200px"}}>
              <div>
                <Button size="large">{item.viscosityGrade}</Button>
              </div>
              <div style={{width: "100%"}}>
                <Button
                  style={{width: "50px"}}
                  icon={<img src={view} alt="view" />}
                  type="dashed"
                />
                <Button
                  icon={<img src={download} alt="view" />}
                  size="medium"
                  type="dashed"
                />
              </div>
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
  margin-bottom: 30px;
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
