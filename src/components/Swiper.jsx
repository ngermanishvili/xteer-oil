import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function SwiperHeading() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://hyundai-gpl.com/wp-content/uploads/2020/12/Long-Lasting-Engine-Oil-Made-with-Nanotechnology-in-Iran-scaled.jpg"
            alt="alo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.hyundai-lube-me.com/wp-content/uploads/2020/01/75625319_157096772186535_7797890395815280640_o.jpg"
            alt="alo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://hyundai-gpl.com/wp-content/uploads/2020/12/Long-Lasting-Engine-Oil-Made-with-Nanotechnology-in-Iran-scaled.jpg"
            alt="alo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://hyundai-gpl.com/wp-content/uploads/2020/12/Long-Lasting-Engine-Oil-Made-with-Nanotechnology-in-Iran-scaled.jpg"
            alt="alo"
          />
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
