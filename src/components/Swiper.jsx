import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import LubeImg from "../assets/banner.jpeg";
import Banner2 from "../assets/xteerbanner2.jpeg";

export default function SwiperHeading() {
  return (
    <>
      <Swiper modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="swiper-slide-content">
            <div className="image-container">
              <img src={LubeImg} alt="lube img" />
              <div>
                <div className="bg-overlay">
                  <span className="slide-text">
                    <h1 style={{ textAlign: "center" }}>
                      <strong>პრემიუმ ხარისხის ლუბრიკანტები</strong>
                    </h1>
                    <h2 style={{ textAlign: "center" }}>
                      <span className="span-reseller">
                        HYUNDAI XTEER - ოფიციალური რესელერი საქართველოში
                      </span>
                    </h2>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            <div className="image-container">
              <img src={LubeImg} alt="lube img" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
