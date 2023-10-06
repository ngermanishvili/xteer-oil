import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Banner2 from "../assets/xteerbanner2.jpeg";

export default function SwiperHeading2() {
  return (
    <>
      <Swiper modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="swiper-slide-content">
            <div className="image-container">
              <img src={Banner2} alt="lube img" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            <div className="image-container">
              <img src={Banner2} alt="lube img" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
