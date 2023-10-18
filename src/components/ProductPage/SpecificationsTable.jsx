import React from "react";
import {useEffect, useState} from "react";
import {dataStore} from "../../zustand/store";
import styled from "styled-components";

const SpecificationsTable = ({product}) => {
  const data = dataStore((state) => state.data);
  console.log(product);

  return (
    <Wrapper>
      <h1>{product?.pdfUrls.length === 0 ? product?.productName : ""}</h1>
      <div className="applications">
        <h2>Applications</h2>
        <ul>
          {product?.applications.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
      <div> aq certs and apps unda dajdes</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  .applications {
    width: 100%;
  }
`;

export default SpecificationsTable;
