import React from "react";
import styled from "styled-components";
import {CATEGORY_SLIDE} from "./constants";
import Card from "../../components/card";
import TitleImage from "../../components/TitleImage/TitleImage";
import {Select} from "antd";
import Related from "../../components/related";

const CategoryStyles = styled.div``;
const Category = () => {
  return (
    <CategoryStyles>
      <div className="container-category">
        <div className="row-category my-3">
          <div className="col-category">
            <div className="grid grid-cols-4 gap-3 md:grid-cols-8 place-content-center">
              {CATEGORY_SLIDE.map((item) => (
                <div
                  data-aos="zoom-in"
                  key={item.name}
                  className="p-1 hover:bg-gray-100 flex items-center justify-center group transition-all cursor-pointer"
                >
                  <a href="#" className="border-none ">
                    <div className="flex gap-1 flex-col items-center h-auto w-[50px] md:w-[60px] lg:w-[80px] text-center justify-center">
                      <img
                        src={item.img}
                        alt="img"
                        className="max-w-full w-auto h-full object-cover"
                      />
                      <div className="card-name-category">
                        <p className="text-[12px] whitespace-nowrap text-black font-light group-hover:underline">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="title-category my-5 py-3">
          <TitleImage>CONTROL BOARD</TitleImage>
        </div>
        <div className="list-product-category">
          <div className="category-filter  mb-3 mx-2">
            <div className="select-filter flex justify-end">
              <Select
                defaultValue="lucy"
                style={{width: 120}}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "disabled",
                    disabled: true,
                    label: "Disabled",
                  },
                  {
                    value: "Yiminghe",
                    label: "yiminghe",
                  },
                ]}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Related />
      </div>
    </CategoryStyles>
  );
};

export default Category;
