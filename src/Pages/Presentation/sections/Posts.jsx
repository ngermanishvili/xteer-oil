// import Grid from "@mui/material/Grid";
// import MKBox from "../../../components/MKBox";
// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import { dataStore } from "../../../zustand/store";
// import { Divider } from "antd";
// import MKTypography from "../../../components/MKTypography";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import SwiperXteer1 from "../../../assets/images/swiper/XTeer+Gasoline+Ultra+Protection+0W30.jpg";
// import SwiperXteer2 from "../../../assets/images/swiper/XTeer+GL-5+SAE+140.jpg";
// import SwiperXteer3 from "../../../assets/images/swiper/XTeer+HD+3000+20W50.jpg";
// import SwiperXteer4 from "../../../assets/images/swiper/XTeer+HYD+AW.jpg";

// import SwiperAzmool from "../../../assets/images/swiper/azmol1.png";
// import SwiperAzmool2 from "../../../assets/images/swiper/azmol2.png";
// import SwiperAzmool3 from "../../../assets/images/swiper/azmol3.png";
// import SwiperAzmool4 from "../../../assets/images/swiper/azmol4.png";
// import Aminol1 from "../../../assets/images/swiper/aminol1.jpeg";
// import Aminol2 from "../../../assets/images/swiper/aminol2.jpeg";
// import Aminol3 from "../../../assets/images/swiper/aminiol3.jpeg";
// import Aminol4 from "../../../assets/images/swiper/aminol4.jpeg";

// // import required modules
// import { Autoplay, FreeMode, Pagination } from "swiper/modules";

// function Places() {
//   const { t } = useTranslation();

//   const [slidesPerView, setSlidesPerView] = useState(4);

//   const updateSlidesPerView = () => {
//     const screenWidth = window.innerWidth;

//     if (screenWidth < 768) {
//       setSlidesPerView(1); // Set to 1 for mobile screens
//     } else if (screenWidth >= 768 && screenWidth <= 1024) {
//       setSlidesPerView(2); // Set to 2 for screens between 768px and 1024px
//     } else {
//       setSlidesPerView(4); // Set to 4 for larger screens
//     }
//   };
//   useEffect(() => {
//     window.addEventListener("resize", updateSlidesPerView);
//     updateSlidesPerView();
//     return () => {
//       window.removeEventListener("resize", updateSlidesPerView);
//     };
//   }, []);

//   return (
//     <>
//       <Wrapper>
//         <MKBox component="section" py={2}>
//           <Divider orientation="center">
//             <MKTypography variant="h6" color="info" textGradient mb={2}>
//               {t("Production")}
//             </MKTypography>
//           </Divider>
//           <BtnWrapper>
//             <Link className="styledLink" to="/find-my-oil">
//               {t("FindDetailedProduct")}
//             </Link>
//           </BtnWrapper>
//           <Grid container spacing={3}>
//             <Swiper
//               slidesPerView={slidesPerView} // Use the dynamic slidesPerView
//               spaceBetween={30}
//               freeMode={true}
//               modules={[Autoplay, FreeMode, Pagination]}
//               className="mySwiper"
//               loop={true} // Add loop prop
//               autoplay={{
//                 delay: 3000,
//                 disableOnInteraction: false,
//               }}
//             >
//               <SwiperSlide>
//                 <img src={SwiperXteer1} alt="qwe" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src={SwiperXteer2} alt="qwe" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src={SwiperXteer3} alt="" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src={SwiperXteer4} alt="" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img className="azmol1" src={SwiperAzmool} alt="" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img className="azmol2" src={SwiperAzmool2} alt="" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src={SwiperAzmool3} alt="" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src={SwiperAzmool4} alt="" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img className="aminol" src={Aminol1} alt="" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img className="aminol" src={Aminol2} alt="" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img className="aminol" src={Aminol3} alt="" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img className="aminol" src={Aminol4} alt="" />
//               </SwiperSlide>
//             </Swiper>
//             <Divider />
//           </Grid>
//         </MKBox>
//       </Wrapper>
//     </>
//   );
// }

// export default Places;

// const BtnWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   .styledLink {
//     border-radius: 15px;
//     max-width: 1200px;
//     width: 100%;
//     height: auto;
//     padding: 10px;
//     background-color: #4281d6;
//     color: #fff;
//     display: flex; /* Add display flex */
//     justify-content: center; /* Center horizontally */
//     align-items: center; /* Center vertically */
//     text-decoration: none; /* Ensure text-decoration is removed for Link */
//   }
// `;

// const Wrapper = styled.div`
//   width: 100%;
//   height: 650px;
// `;
