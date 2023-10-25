import React from "react";

const SingleDescription = ({ data }) => {
  console.log(data);
  return (
    <div>
      <p>{data?.productName}</p>
      <h2>{data?.description}</h2>
    </div>
  );
};

export default SingleDescription;
