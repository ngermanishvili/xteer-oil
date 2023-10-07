import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bgBanner from "../../assets/banner.jpeg";
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
