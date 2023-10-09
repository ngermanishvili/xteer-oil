import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import Logo1 from "../../assets/energopro.png";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

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
        breakpoints={{
          // when window width is >= 640px
          1320: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          // when window width is <= 640px
          
          220: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide>
          <Card
            style={{
              width: "50%",
              margin: "0 auto",
              background: "#ccc",
              display: "flex",
              justifyContent: "center",
            }}
            className="py-4"
          >
            <CardBody className="overflow-visible py-2 flex flex-col justify-center">
              <Image
                style={{margin: "0 auto"}}
                alt="Card background"
                className="object-cover rounded-xl"
                src={Logo1}
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <p className="text-tiny uppercase font-bold">
                სს „ენერგო-პრო ჯორჯია“
              </p>
              <small className="text-default-600">
                ელექტროენერგიის სადისტრიბუციო ქსელის ყველაზე მსხვილი კერძო
                მფლობელი.
              </small>
            </CardHeader>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            style={{
              width: "50%",
              margin: "0 auto",
              background: "#ccc",
              display: "flex",
              justifyContent: "center",
            }}
            className="py-4"
          >
            <CardBody className="overflow-visible py-2 flex flex-col justify-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={Logo1}
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <p className="text-tiny uppercase font-bold">
                სს „ენერგო-პრო ჯორჯია“
              </p>
              <small className="text-default-600">
                ელექტროენერგიის სადისტრიბუციო ქსელის ყველაზე მსხვილი კერძო
                მფლობელი.
              </small>
            </CardHeader>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            style={{
              width: "50%",
              margin: "0 auto",
              background: "#ccc",
              display: "flex",
              justifyContent: "center",
            }}
            className="py-4"
          >
            <CardBody className="overflow-visible py-2 flex flex-col justify-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={Logo1}
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <p className="text-tiny uppercase font-bold">
                სს „ენერგო-პრო ჯორჯია“
              </p>
              <small className="text-default-600">
                ელექტროენერგიის სადისტრიბუციო ქსელის ყველაზე მსხვილი კერძო
                მფლობელი.
              </small>
            </CardHeader>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            style={{
              width: "50%",
              margin: "0 auto",
              background: "#ccc",
              display: "flex",
              justifyContent: "center",
            }}
            className="py-4"
          >
            <CardBody className="overflow-visible py-2 flex flex-col justify-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={Logo1}
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <p className="text-tiny uppercase font-bold">
                სს „ენერგო-პრო ჯორჯია“
              </p>
              <small className="text-default-600">
                ელექტროენერგიის სადისტრიბუციო ქსელის ყველაზე მსხვილი კერძო
                მფლობელი.
              </small>
            </CardHeader>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            style={{
              width: "50%",
              margin: "0 auto",
              background: "#ccc",
              display: "flex",
              justifyContent: "center",
            }}
            className="py-4"
          >
            <CardBody className="overflow-visible py-2 flex flex-col justify-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={Logo1}
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <p className="text-tiny uppercase font-bold">
                სს „ენერგო-პრო ჯორჯია“
              </p>
              <small className="text-default-600">
                ელექტროენერგიის სადისტრიბუციო ქსელის ყველაზე მსხვილი კერძო
                მფლობელი.
              </small>
            </CardHeader>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card
            style={{
              width: "50%",
              margin: "0 auto",

              background: "#ccc",
              display: "flex",
              justifyContent: "center",
            }}
            className="py-4"
          >
            <CardBody className="overflow-visible py-2 flex flex-col justify-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={Logo1}
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <p className="text-tiny uppercase font-bold">
                სს „ენერგო-პრო ჯორჯია“
              </p>
              <small className="text-default-600">
                ელექტროენერგიის სადისტრიბუციო ქსელის ყველაზე მსხვილი კერძო
                მფლობელი.
              </small>
            </CardHeader>
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
