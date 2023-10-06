// import { Col, Divider, Row } from "antd";
// import Logo1 from "../assets/energopro.png";
// import Logo2 from "../assets/azot.png";
// import Logo3 from "../assets/telasi.png";
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

// Import Swiper React components
import Logo1 from "../assets/energopro.png";
import Logo2 from "../assets/azot.png";
import Logo3 from "../assets/telasi.png";
import styled from "styled-components";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";

export default function Companies() {
  return (
    <>
      <Wrapper>
        <Swiper
          slidesPerView={4}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{ delay: 2000 }}
          modules={[Grid, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src={Logo1} alt="asd" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Logo2} alt="asd" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Logo3} alt="asd" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Logo2} alt="asd" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Logo1} alt="asd" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Logo3} alt="asd" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Logo3} alt="asd" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Logo3} alt="asd" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Logo3} alt="asd" />
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </>
  );
}

const Image = styled.img`
  margin-top: 100px;
  width: 100px;
  height: 120px !important;
  max-width: 100%;
  max-height: auto;
  object-fit: contain;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebebeb;
`;
