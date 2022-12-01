import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import slugify from "slugify";

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
import {collection, getDocs, limit, query, where} from "firebase/firestore";
import {db} from "../../firebase";

const HomeStyles = styled.div``;
const Home = () => {
  const [newProduct, setNewProduct] = useState([]);
  const [controlBoard, setControlBoard] = useState([]);
  const [extruder, setExtruder] = useState([]);
  const [printer, setPrinter] = useState([]);
  useEffect(() => {
    const docRef = query(collection(db, "products"), limit(10));
    getDocs(docRef).then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setNewProduct(data);
    });
  }, []);
  useEffect(() => {
    const docRef = query(
      collection(db, "products"),
      where("category", "==", "3D Printer"),
      limit(4)
    );
    getDocs(docRef).then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setPrinter(data);
    });
  }, []);
  useEffect(() => {
    const docRef = query(
      collection(db, "products"),
      where("category", "==", "Control Board"),
      limit(4)
    );
    getDocs(docRef).then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setControlBoard(data);
    });
  }, []);
  useEffect(() => {
    const docRef = query(
      collection(db, "products"),
      where("category", "==", "Extruder Kit"),
      limit(4)
    );
    getDocs(docRef).then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setExtruder(data);
    });
  }, []);
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
        <div className="w-[90px]  animate-slidedown sm:w-[160px] md:w-[192px] lg:w-[300px] h-auto p-2 ">
          <Link
            to={`/category?name=${slugify("3D Printer")}`}
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
              <span className="text-[10px] sm:text-[13px] md:text-[14px] text-black  font-extralight group-hover:text-blue-700">
                3D Printer
              </span>
            </div>
          </Link>
        </div>
        <div className="w-[90px]  animate-slidedown sm:w-[160px] md:w-[192px] lg:w-[300px] h-auto p-2 ">
          <Link
            to={`/category?name=${slugify("Control Board")}`}
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
              <span className="text-[10px] sm:text-[13px] md:text-[14px]  text-black font-extralight group-hover:text-blue-700">
                Control Board
              </span>
            </div>
          </Link>
        </div>
        <div className="w-[90px]  animate-slidedown sm:w-[160px] md:w-[192px] lg:w-[300px] h-auto p-2 ">
          <Link
            to={`/category?name=${slugify("Extruder")}`}
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
              <span className="text-[10px] sm:text-[13px] md:text-[14px] text-black font-extralight group-hover:text-blue-700">
                Extruder
              </span>
            </div>
          </Link>
        </div>
        <div className="w-[90px]  animate-slidedown sm:w-[160px] md:w-[192px] lg:w-[300px] h-auto p-2">
          <Link
            to={`/category?name=${slugify("Monitor")}`}
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
              <span className="text-[10px] sm:text-[13px] md:text-[14px] text-black font-extralight group-hover:text-blue-700">
                Monitor
              </span>
            </div>
          </Link>
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
          {newProduct.length > 0 &&
            newProduct.map((item) => (
              <SwiperSlide key={item.id}>
                <Card newPr={true} data={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <TitleImage>Control Board</TitleImage>
      <div className="product-list 	  w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 place-items-center gap-2 my-5">
        {controlBoard.length > 0 &&
          controlBoard.map((item) => <Card data={item} />)}
        <CardSeeMore to="/category?name=Control-Board" />
      </div>

      <TitleImage img="bg-h2-extruders">H2 Series Extruders</TitleImage>

      <div className="product-list 	  w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 place-items-center gap-2 my-5">
        {extruder.length > 0 && extruder.map((item) => <Card data={item} />)}
        <CardSeeMore to="/category?name=Extruder-Kit" />
      </div>

      <TitleImage img="bg-3d-printer">3D Printers</TitleImage>
      <div className="product-list 	  w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 place-items-center gap-2 my-5">
        {printer.length > 0 && printer.map((item) => <Card data={item} />)}
        <CardSeeMore to="/category?name==3D-Printer" />
      </div>
    </HomeStyles>
  );
};

export default Home;
