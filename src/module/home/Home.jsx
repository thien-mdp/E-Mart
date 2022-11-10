import React from "react";
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation, Pagination} from "swiper";
import Card from "../../components/card";

import {Button} from "antd";
import {AiOutlineArrowRight} from "react-icons/ai";
import {CardSeeMore} from "../../components/card/Card";
import TitleImage from "../../components/TitleImage/TitleImage";

const HomeStyles = styled.div``;
const Home = () => {
  return (
    <HomeStyles>
      <div className="ads-container ">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://cdn.shopify.com/s/files/1/1619/4791/files/banner2_1900x.jpg?v=1665579208"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://cdn.shopify.com/s/files/1/1619/4791/files/banner2_1900x.jpg?v=1665579208"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://cdn.shopify.com/s/files/1/1619/4791/files/banner2_1900x.jpg?v=1665579208"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="product-loop my-5 grid grid-cols-4 place-items-center gap-0">
        <div className="w-[90px] animate-slidedown sm:w-[160px] md:w-[192px] lg:w-[300px] h-auto p-2 ">
          <a
            href="#"
            className=" group flex flex-col items-center justify-center "
          >
            <div className="product-thumb overflow-hidden">
              <img
                src="https://cdn.shopify.com/s/files/1/1619/4791/products/B1printer_320x.jpg?v=1666238724"
                alt="img"
                loading="lazy"
                className="object-cover group-hover:scale-50 transition-all"
              />
            </div>
            <div className="product-title text-center">
              <span className="text-[10px] sm:text-[13px] md:text-[14px]  font-extralight group-hover:text-teal-400">
                3D Printers
              </span>
            </div>
          </a>
        </div>
        <div className="w-[90px] animate-slidedown sm:w-[160px] md:w-[192px] lg:w-[300px] h-auto p-2 ">
          <a
            href="#"
            className=" group flex flex-col items-center justify-center "
          >
            <div className="product-thumb overflow-hidden">
              <img
                loading="lazy"
                src="https://cdn.shopify.com/s/files/1/1619/4791/products/1_8f611c0a-ec7d-4f9b-85ca-d5a57bb700e6_320x.jpg?v=1656744827"
                alt="img"
                className="object-cover group-hover:scale-50 transition-all"
              />
            </div>
            <div className="product-title text-center">
              <span className="text-[10px] sm:text-[13px] md:text-[14px]  font-extralight group-hover:text-teal-400">
                Control Board
              </span>
            </div>
          </a>
        </div>
        <div className="w-[90px] animate-slidedown sm:w-[160px] md:w-[192px] lg:w-[300px] h-auto p-2 ">
          <a
            href="#"
            className=" group flex flex-col items-center justify-center "
          >
            <div className="product-thumb overflow-hidden">
              <img
                loading="lazy"
                src="https://cdn.shopify.com/s/files/1/1619/4791/products/1_bffe3ddf-f3de-4a28-9672-304eb07afc31_320x.jpg?v=1665136429"
                alt="img"
                className="object-cover group-hover:scale-50 transition-all"
              />
            </div>
            <div className="product-title text-center w-full ">
              <span className="text-[10px] sm:text-[13px] md:text-[14px] font-extralight group-hover:text-teal-400">
                Extruder & Hotend
              </span>
            </div>
          </a>
        </div>
        <div className="w-[90px] animate-slidedown sm:w-[160px] md:w-[192px] lg:w-[300px] h-auto p-2">
          <a
            href="#"
            className=" group flex flex-col items-center justify-center "
          >
            <div className="product-thumb overflow-hidden ">
              <img
                loading="lazy"
                src="https://cdn.shopify.com/s/files/1/1619/4791/products/03_320x.png?v=1661327659"
                alt="img"
                className="object-cover group-hover:scale-50 transition-all "
              />
            </div>
            <div className="product-title text-center">
              <span className="text-[10px] sm:text-[13px] md:text-[14px] font-extralight group-hover:text-teal-400">
                Screen & LCD
              </span>
            </div>
          </a>
        </div>
      </div>
      <TitleImage img="bg-usa-new">New Arrival</TitleImage>
      <div className="w-full my-5">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
          }}
          spaceBetween={8}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
      <TitleImage>Control Board</TitleImage>
      <div className="product-list 	  w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 place-items-center gap-2 my-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <CardSeeMore />
      </div>

      <TitleImage img="bg-h2-extruders">H2 Series Extruders</TitleImage>

      <div className="product-list 	  w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 place-items-center gap-2 my-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <CardSeeMore />
      </div>

      <TitleImage img="bg-3d-printer">3D Printers</TitleImage>
      <div className="product-list 	  w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 place-items-center gap-2 my-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <CardSeeMore />
      </div>
    </HomeStyles>
  );
};

export default Home;
