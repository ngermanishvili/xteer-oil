// import React from "react";
// import { Divider, Typography } from "antd";
// const { Title, Paragraph, Text } = Typography;

// const IntroDuction = () => (
//   <Typography>
//     <Divider style={{ backgroundColor: "#fff" }} />

//     <Title className="text-lg" style={{ color: "#fff" }}>
//       <Paragraph
//         style={{ fontSize: "22px", padding: "20px" }}
//         className="text-lg"
//       >
//         პრემიუმ ლუბრიკანტების სპეციალიზებული ბრენდი დამზადებულია ჰიუნდაის
//         ნავთობბანკის მიერ. <br />
//         XTeer სწრაფად იზრდება შიდა და გლობალურ ბაზრებზე,
//       </Paragraph>
//     </Title>
//     <Divider style={{ backgroundColor: "#fff" }} />
//   </Typography>
// );

// export default IntroDuction;

import React from "react";

const IntroDuction = () => {
  return (
    <div className="p-5 ">
      <h2 style={{ textAlign: "center" }}>
        <span style={{ color: "#666464", fontSize: "140%" }}>
          <strong>GENTO TRADING </strong>
        </span>
      </h2>
      <h2 className="lead" style={{ textAlign: "center" }}>
        <span style={{ color: "#666464", fontSize: "80%" }}>
          <strong>
            სპეციალიზირებულია მაღალი ხარისხის ლუბრიკანტებისა და ლითონის
            კონტეინერების წარმოებაში ფართო ასორტიმენტში
          </strong>
        </span>
      </h2>
      <h3 className="lead" style={{ textAlign: "center" }}>
        <span style={{ color: "#666464" }}>
          <strong>
            ხარისხი არის საწყისი წერტილი კომპანიის ბიზნესისთვის. ჩვენი მიზანია
            რომ პროდუქტის ხარისხის გაზრდამ გაზარდოს მომხმარებლის ლოიალობას
            ბრენდის მიმართ.
          </strong>
        </span>
      </h3>
    </div>
  );
};

export default IntroDuction;
