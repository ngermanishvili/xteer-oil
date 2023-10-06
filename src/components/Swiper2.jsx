// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import Banner2 from "../assets/xteerbanner2.jpeg";

// export default function SwiperHeading2() {
//   return (
//     <>
//       <Swiper modules={[Navigation]} className="mySwiper">
//         <SwiperSlide>
//           <div className="swiper-slide-content">
//             <div className="image-container">
//               <img src={Banner2} alt="lube img" />
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="swiper-slide-content">
//             <div className="image-container">
//               <img src={Banner2} alt="lube img" />
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import accordionImg from "../assets/xteerfooter.jpg";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          loop: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={accordionImg} alt="acc" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={accordionImg} alt="acc" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={accordionImg} alt="acc" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={accordionImg} alt="acc" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
