// import { Col, Divider, Row } from "antd";
// import Logo1 from "../../assets/energopro.png";
// import Logo2 from "../../assets/azot.png";
// import styled from "styled-components";

// const ImageContainer = styled.div`
//   max-width: 100%;
//   width: 400px;
//   padding: 10px;
//   height: 150px;
//   border-radius: 15px;
//   background-color: #ffffff;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Image = styled.img`
//   width: 100px;
//   height: 100px;
//   max-width: 100%;
//   max-height: 100%;
//   object-fit: contain;
// `;

// const Companies = () => {
//   return (
//     <Wrapper>
//       <Row
//         gutter={16}
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Col span={6} xs={8} sm={6} md={6} lg={8}>
//           <ImageContainer>
//             <Image src={Logo1} alt="" />
//           </ImageContainer>
//         </Col>
//         <Col span={6} xs={8} sm={8} md={8} lg={8}>
//           <ImageContainer>
//             <Image src={Logo2} alt="" />
//           </ImageContainer>
//         </Col>
//         <Col span={6} xs={8} sm={8} md={6} lg={6}>
//           <ImageContainer>
//             <Image src={Logo2} alt="" />
//           </ImageContainer>
//         </Col>
//       </Row>
//       <SpacingContent />
//       <Row
//         gutter={16}
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Col span={6} xs={8} sm={6} md={6} lg={8}>
//           <ImageContainer>
//             <Image src={Logo1} alt="" />
//           </ImageContainer>
//         </Col>
//         <Col span={6} xs={8} sm={8} md={8} lg={8}>
//           <ImageContainer>
//             <Image src={Logo2} alt="" />
//           </ImageContainer>
//         </Col>
//         <Col span={6} xs={8} sm={8} md={6} lg={6}>
//           <ImageContainer>
//             <Image src={Logo2} alt="" />
//           </ImageContainer>
//         </Col>
//       </Row>
//     </Wrapper>
//   );
// };

// export default Companies;

// const SpacingContent = styled.div`
//   width: 100%;
//   height: 50px;
// `;

// const Wrapper = styled.div`
//   padding: 80px;
//   margin: 0 auto;
//   background-color: #00559d;
//   width: 92%;
//   border-radius: 15px;
//   padding: 50px 50px;
// `;

// import React from "react";
// import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
// import Logo1 from "../../assets/energopro.png";

// export default function Companies() {
//   return (
//     <>
//       <Card style={{ width: "300px" }} className="py-4">
//         <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//           <p className="text-tiny uppercase font-bold">
//             სს „ენერგო-პრო ჯორჯია“
//           </p>
//           <small className="text-default-600">
//             ელექტროენერგიის სადისტრიბუციო ქსელის ყველაზე მსხვილი კერძო მფლობელი.
//           </small>
//         </CardHeader>
//         <CardBody className="overflow-visible py-2">
//           <Image
//             alt="Card background"
//             className="object-cover rounded-xl"
//             src={Logo1}
//             width={250}
//           />
//         </CardBody>
//       </Card>
//     </>
//   );
// }

import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Logo1 from "../../assets/energopro.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Companies() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card style={{ width: "250px", background: "#ccc" }} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col ">
              <p className="text-tiny uppercase font-bold">
                სს „ენერგო-პრო ჯორჯია“
              </p>
              <small className="text-default-600">
                ელექტროენერგიის სადისტრიბუციო ქსელის ყველაზე მსხვილი კერძო
                მფლობელი.
              </small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={Logo1}
                width={250}
              />
            </CardBody>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "300px" }} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">
                სს „ენერგო-პრო ჯორჯია“
              </p>
              <small className="text-default-600">
                ელექტროენერგიის სადისტრიბუციო ქსელის ყველაზე მსხვილი კერძო
                მფლობელი.
              </small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={Logo1}
                width={250}
              />
            </CardBody>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "300px" }} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">
                სს „ენერგო-პრო ჯორჯია“
              </p>
              <small className="text-default-600">
                ელექტროენერგიის სადისტრიბუციო ქსელის ყველაზე მსხვილი კერძო
                მფლობელი.
              </small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={Logo1}
                width={250}
              />
            </CardBody>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "300px" }} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">
                სს „ენერგო-პრო ჯორჯია“
              </p>
              <small className="text-default-600">
                ელექტროენერგიის სადისტრიბუციო ქსელის ყველაზე მსხვილი კერძო
                მფლობელი.
              </small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={Logo1}
                width={250}
              />
            </CardBody>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "300px" }} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">
                სს „ენერგო-პრო ჯორჯია“
              </p>
              <small className="text-default-600">
                ელექტროენერგიის სადისტრიბუციო ქსელის ყველაზე მსხვილი კერძო
                მფლობელი.
              </small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={Logo1}
                width={250}
              />
            </CardBody>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card style={{ width: "300px" }} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">
                სს „ენერგო-პრო ჯორჯია“
              </p>
              <small className="text-default-600">
                ელექტროენერგიის სადისტრიბუციო ქსელის ყველაზე მსხვილი კერძო
                მფლობელი.
              </small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={Logo1}
                width={250}
              />
            </CardBody>
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
