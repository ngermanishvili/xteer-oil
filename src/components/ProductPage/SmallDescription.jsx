import React from "react";
import styled from "styled-components";

const SmallDescription = ({data}) => {
  return (
    <>
      <Container>
        <h2>Product Name : {data?.productName}</h2>
        <h3>Category : {data?.category}</h3>
        <h2>Product Line : {data?.productLine}</h2>
        <p>{data?.description}</p>
        <h2>Package Sizes : {data?.packageSizes.map((item) => ` ${item} `)}</h2>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default SmallDescription;
