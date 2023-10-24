import React from "react";
import styled from "styled-components";
import {Button} from "antd";
const mainColor = "rgb(57, 68, 116)";
const Specifications = ({data}) => {
  const specs = data?.specs;

  const renderSpecsKeys = () => {
    if (!specs) {
      return null;
    }

    const specItemKeys = Object.entries(specs).map(([key, values]) => {
      if (!values.includes("-")) {
        const modifiedKey = key.replace("(", " ("); // Replace "(" with " ("
        return (
          <div className="singleKey" key={modifiedKey}>
            <p>{modifiedKey}</p> <p style={{alignSelf: "center"}}>:</p>
          </div>
        );
      }
      return null; // Return null for keys with values containing "-"
    });

    return specItemKeys;
  };

  const renderSpecsValues = () => {
    if (!specs) {
      return null;
    }

    const valueItemKeys = Object.entries(specs).map(([key, values]) => {
      const valueButtons = values.map((item, index) => {
        if (item !== "-") {
          return (
            <Button type="dashed" key={index}>
              {item}
            </Button>
          );
        }
        return null; // Return null for values that are "-"
      });

      const filteredValueButtons = valueButtons.filter(
        (button) => button !== null
      );

      if (filteredValueButtons.length > 0) {
        return (
          <div className="singleValueRow" key={key}>
            {filteredValueButtons}
          </div>
        );
      }
      return null; // Return null for rows with all values as "-"
    });

    return valueItemKeys;
  };

  return (
    <Container>
      <h2 style={{alignSelf: "center", display: "block", fontSize: "40px"}}>
        SPECIFICATIONS
      </h2>
      <div style={{display: "flex", gap: "20px"}}>
        <div className="SpecKeys">{renderSpecsKeys()}</div>
        <div className="ValuesWrapper">{renderSpecsValues()}</div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  overflow-x: auto; // Enable horizontal scrolling
  flex-direction: column;
  @media (max-width: 870px) {
    overflow-x: scroll; // Use scroll instead of auto for screens below 870px
  }
  .SpecKeys {
    width: 25%;
    display: flex;
    flex-direction: column;

    /* Use the main color for border */
    .singleKey {
      font-size: 20px;
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      /* Use the main color for border */
    }

    @media (max-width: 1160px) {
      width: 35%;
    }
    @media (max-width: 1160px) {
      width: 45%;
    }
    @media (max-width: 705px) {
      width: 100%;
    }
  }
  .ValuesWrapper {
    display: flex;
    flex-direction: column;
    /* Use the main color for border */
    .singleValueRow {
      font-size: 20px;
      gap: 20px;
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      /* Use the main color for border */
    }
  }
`;
export default Specifications;
