// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import LubeImg from "../assets/banner.jpeg";
// import Banner2 from "../assets/xteerbanner2.jpeg";

// export default function SwiperHeading() {
//   return (
//     <>
//       <Swiper modules={[Navigation]} className="mySwiper">
//         <SwiperSlide>
//           <div className="swiper-slide-content">
//             <div className="image-container">
//               <img src={LubeImg} alt="lube img" />
//               <div>
//                 <div className="bg-overlay">
//                   <span className="slide-text">
//                     <h1 style={{ textAlign: "center" }}>
//                       <strong>Hyundai Lubricants - ზეთები საქართველოში </strong>
//                     </h1>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="swiper-slide-content">
//             <div className="image-container">
//               <img src={LubeImg} alt="lube img" />
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bgBanner from "../assets/banner.jpeg";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default function SwiperHeading() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{ backgroundImage: `url(${bgBanner})` }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            GENTO TRADING
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            OILBANK
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              სპეციალიზირებულია მაღალი ხარისხის ლუბრიკანტებისა და ლითონის
              კონტეინერების წარმოებაში ფართო ასორტიმენტში.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            ჯენტო თრეიდინგი
          </div>
          <div className="subtitle" data-swiper-parallax="-200"></div>
          <div className="text2" data-swiper-parallax="-100">
            <p>OFFICIAL SELLER IN GEORGIA</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
