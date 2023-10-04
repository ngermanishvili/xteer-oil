import React from "react";
import { Divider, Typography } from "antd";
const { Title, Paragraph, Text } = Typography;

const IntroDuction = () => (
  <Typography>
    <Divider style={{ backgroundColor: "#fff" }} />

    <Title className="text-lg" style={{ color: "#fff" }}>
      <Paragraph
        style={{ fontSize: "22px", padding: "20px" }}
        className="text-lg"
      >
        პრემიუმ ლუბრიკანტების სპეციალიზებული ბრენდი დამზადებულია ჰიუნდაის
        ნავთობბანკის მიერ. <br />
        XTeer სწრაფად იზრდება შიდა და გლობალურ ბაზრებზე,
      </Paragraph>
    </Title>
    <Divider style={{ backgroundColor: "#fff" }} />
  </Typography>
);

export default IntroDuction;
