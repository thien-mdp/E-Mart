import React from "react";
import {BsCartPlus} from "react-icons/bs";
import {Link} from "react-router-dom";

const Card = ({data}) => {
  return (
    <div className="card min-w-[50%] sm:min-w-[25%] md:min-w-[20%]  p-3 border m-2">
      <Link to={`/product/${data?.id}`} className=" group">
        <div className="card-thumb overflow-hidden">
          <img
            src={data?.image}
            alt="card"
            className="object-cover w-full h-auto max-h-[150px]  max-w-[320px] aspect-auto group-hover:scale-110 transition-all"
            loading="lazy"
            data-aos="zoom-in"
          />
        </div>
        <div className="card-title break-word my-1 py-1">
          <p className="leading-0 text-[10px] sm:text-[13px] text-black font-semibold group-hover:text-teal-400">
            {data?.title}
          </p>
        </div>
      </Link>
      <div className="card-action  z-10 flex items-center flex-1 justify-between">
        <div className="card-price">
          <span className="text-xs font-extralight sm:text-[12px] md:text-[13px]">
            {`${data?.price}$`}
          </span>
        </div>
        <div className="card-button">
          <BsCartPlus className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export const CardSeeMore = () => {
  return (
    <a
      href="/"
      className="card cursor-pointer flex items-center justify-center  min-w-[50%] sm:min-w-[25%] h-full md:min-w-[20%] w-full  p-3 border border-teal-400 shadow-lg text-teal-400 font-semibold hover:text-white hover:bg-teal-400 m-2"
    >
      See more | shop all
    </a>
  );
};
export default React.memo(Card);
