import React from "react";
import styled from "styled-components";

const MainDescription = ({data}) => {
  return (
    <Container>
      <p>{data?.description}</p>
      <div>
        <span>Applications:</span>
        <ul>
          {data?.applications?.map((item) => (
            <li style={{listStyle: "inside"}}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <span>Certifications And Application:</span>
        <ul>
          {data?.certsAndApps?.map((item) => (
            <li style={{listStyle: "inside"}}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <span>Features And Benefits</span>
        <ul>
          {data?.featuresAndBenefits?.map((item) => (
            <li style={{listStyle: "inside"}}>{item}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export default MainDescription;
