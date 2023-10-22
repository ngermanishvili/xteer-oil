import React from "react";
import styled from "styled-components";

const Specifications = ({data}) => {
  const specs = data?.specs;

  const renderSpecsKeys = () => {
    if (!specs) {
      return null;
    }

    const specItemKeys = Object.entries(specs).map(([key, values]) => {
      // Assuming values is an array of strings
      const valueString = values.join(", "); // Join array values into a single string
      return (
        <div className="singleKey" key={key}>
          <div>{key}:</div>
        </div>
      );
    });

    return specItemKeys;
  };
  const renderSpecsValues = () => {
    if (!specs) {
      return null;
    }

    const specItemKeys = Object.entries(specs).map(([key, values]) => {
      // Assuming values is an array of strings
      const valueString = values.join(", "); // Join array values into a single string
      return (
        <div className="values" key={key}>
          <div>{valueString}</div>
        </div>
      );
    });

    return specItemKeys;
  };

  return (
    <Container>
      <div className="SpecKeys">{renderSpecsKeys()}</div>
      <div className="Value">{renderSpecsValues()}</div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  .SpecKeys {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  .Value {
    width: 50%;
    display: flex;
    gap: 50px;
    flex-direction: column;
  }
`;

export default Specifications;

{
  //   /*  */
}
