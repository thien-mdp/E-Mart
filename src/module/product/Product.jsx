import React from "react";
import styled from "styled-components";

import {Button} from "antd";
import {BiCreditCard} from "react-icons/bi";
import {BsBoxSeam, BsShieldFillCheck} from "react-icons/bs";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai";
import ImageMagnifier from "../../components/ImageMagnifier";
import TitleImage from "../../components/TitleImage/TitleImage";
import Card from "../../components/card";
import Related from "../../components/related";
const ProductStyles = styled.div`
  width: 100%;
  height: 100vh;
`;
const Product = () => {
  const [image, setImage] = React.useState(
    "https://cdn.shopify.com/s/files/1/1619/4791/products/3_26ebe1dd-9242-4226-b0a2-55e94a934acd_600x.jpg?v=1656732345"
  );
  const handleChangeImage = (url) => {
    setImage(url);
  };
  return (
    <ProductStyles>
      <div className="container-product h-fit flex flex-1 flex-col sm:flex-row sm:justify-between sm:gap-3 p-5 mb-5">
        <div className="product-col-1 md:basis-[60%] md:max-h-[550px]  ">
          <div className="product-image p-5">
            <div className="box-image mx-auto animate-slideright  w-[250px] sm:max-w-[450px] sm:w-[300px] md:w-auto md:max-w-[600px] overflow-hidden">
              {/* <img
                loading="lazy"
                src={image}
                alt="img-product"
                className="object-cover mx-auto max-w-full h-auto"
              /> */}
              <ImageMagnifier
                style={"object-cover mx-auto max-w-full h-auto max-h-[400px]"}
                src={image}
              />
            </div>
            <div className="slide-image  flex items-center justify-center  my-2 animate-slideright">
              <div className=" grid grid-cols-4 place-content-center justify-center mx-auto gap-3  md:gap-4  ">
                <div
                  className="image-item flex items-center justify-center relative p-1   "
                  onClick={() =>
                    handleChangeImage(
                      "https://cdn.shopify.com/s/files/1/1619/4791/products/A4_125x.jpg?v=1654850532"
                    )
                  }
                >
                  <img
                    src="https://cdn.shopify.com/s/files/1/1619/4791/products/A4_125x.jpg?v=1654850532"
                    alt="img"
                    className="object-cover mx-auto max-h-full w-full max-w-[125px]  aspect-auto cursor-pointer "
                  />
                </div>
                <div className="image-item flex items-center justify-center relative p-1   ">
                  <img
                    src="https://cdn.shopify.com/s/files/1/1619/4791/products/A6_125x.jpg?v=1654850532"
                    alt="img"
                    className="object-cover mx-auto max-h-full w-full max-w-[125px]  aspect-auto cursor-pointer "
                  />
                </div>
                <div className="image-item flex items-center justify-center relative p-1  ">
                  <img
                    src="https://cdn.shopify.com/s/files/1/1619/4791/products/A4_125x.jpg?v=1654850532"
                    alt="img"
                    className="object-cover mx-auto max-h-full w-full max-w-[125px]  aspect-auto cursor-pointer "
                  />
                </div>
                <div className="image-item flex items-center justify-center relative p-1">
                  <img
                    src="https://cdn.shopify.com/s/files/1/1619/4791/products/A5_125x.jpg?v=1654850532"
                    alt="img"
                    className="object-cover mx-auto max-h-full w-full max-w-[125px]  aspect-auto cursor-pointer "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-col-2 basis-[40%]">
          <div className="info-product animate-slideleft ">
            <div className="title-product mb-2 md:mb-4">
              <h1 className="text-xl font-bold md:text-2xl lg:text-3xl leading-5">
                BIQU B1 SE PLUS 3D Printer Upgrade 32Bit Control Board Full
                Metal Extruder With TMC Drive Automatic Leveling DIY 3D Drucker
                Kit
              </h1>
            </div>
            <div className="id-product mb-2 md:mb-4">
              <span className="text-sm md:text-base">SKU: 1020000387</span>
            </div>
            <div className="price-product mb-2 md:mb-4">
              <span className="text-sm font-light md:text-base">$39.98</span>
              <p className="text-sm md:text-base">
                <small>
                  <strong>
                    <a href="#" className="underline">
                      Shipping
                    </a>{" "}
                    calculated at checkout
                  </strong>
                </small>
              </p>
            </div>
            <div className="action-user-product mb-2 md:mb-4">
              <div>
                <div className="amount-input h-[30px] md:h-[35px]  flex items-center gap-1  mb-2 md:mb-4">
                  <Button
                    htmlType="button"
                    className="  text-white bg-teal-400 rounded-full"
                    icon={<AiOutlinePlusCircle />}
                  />
                  <input
                    type="text"
                    defaultValue={10}
                    className="outline-none px-[8px] h-full p-1 w-10"
                  />
                  <Button
                    htmlType="button"
                    className="text-white bg-teal-400 rounded-full"
                    icon={<AiOutlineMinusCircle />}
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-2 w-full mb-3 md:mb-5">
                  <Button className="w-full py-2 px-3 border-2 border-teal-400 text-teal-400">
                    Add to Cart
                  </Button>
                  <Button className="w-full py-2 px-3 border-2 border-teal-400  bg-teal-400 text-white">
                    Buy it now
                  </Button>
                </div>
                <div className="block-paypal flex flex-col gap-3 mb-3">
                  <div className="bottom-quarter">
                    <img
                      src="https://cdn.shopify.com/s/files/1/1619/4791/files/2022-09-06T114842.852_480x.png?v=1662436142"
                      alt="img"
                      className="max-w-[600px] w-full object-cover aspect-auto"
                    />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ">
                    <div className="icon-text flex flex-1 items-center leading-3 gap-x-1 whitespace-normal bg-black w-fit text-white p-1 px-2 rounded-lg">
                      <BsBoxSeam className="text-2xl " />
                      <p className="text-[10px] sm:text-[12px] font-normal">
                        <span>Global shipping</span>
                      </p>
                    </div>
                    <div className="icon-text flex flex-1 items-center leading-3 gap-x-1 whitespace-normal bg-black w-fit text-white p-1 px-2 rounded-lg">
                      <BsShieldFillCheck className="text-2xl" />
                      <p className="text-[10px] sm:text-[12px] font-normal">
                        <span>Global shipping</span>
                      </p>
                    </div>
                    <div className="icon-text flex flex-1 items-center leading-3 whitespace-normal gap-x-1 bg-black w-fit text-white p-1 px-2 rounded-lg">
                      <BiCreditCard className="text-2xl" />
                      <p className="text-[10px] sm:text-[12px] font-normal">
                        <span>Global shipping</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-desc relative">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="product-col-desc-1 sm:basis-[70%] sm:p-3  bg-red-500">
            <TitleImage margin="m-0" img="bg-3d-printer">
              DESCRIPTION
            </TitleImage>
          </div>
          <div className="product-col-desc-2 sm:basis-[40%] sm:p-3 bg-blue-500">
            adsadsadsadsaadsadsadsadsa adsadsadsadsa adsadsadsadsa adsadsadsadsa
            adsadsadsadsa adsadsadsadsa
          </div>
        </div>
      </div>
      <Related />
    </ProductStyles>
  );
};

export default Product;
