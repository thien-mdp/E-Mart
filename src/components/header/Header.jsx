import React, {useState} from "react";
import {AiOutlineShoppingCart, AiOutlineClose} from "react-icons/ai";
import {FaRegUserCircle} from "react-icons/fa";
import {HiMenuAlt2} from "react-icons/hi";
import {Input} from "antd";
import styled from "styled-components";

const HeaderStyles = styled.header`
  .cart {
    position: relative;
    .has-item {
      font-size: 9px;
      position: absolute;
      width: 15px;
      height: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;

      top: -6px;
      right: -7px;
    }
  }
`;

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [bgHeader, setBgHeader] = React.useState(false);

  React.useLayoutEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 120) {
        setBgHeader(true);
      } else {
        setBgHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <HeaderStyles
      className={`py-3  top-header z-[999]  w-full transition-all fixed  h-[68px]  right-0 left-0 ${
        bgHeader ? "bg-teal-400 " : "bg-black"
      }`}
    >
      <div className="mx-auto h-full  max-w-[1200px] flex items-center justify-between">
        <div className="sm:hidden menu-mobile text-white text-[20px]">
          <HiMenuAlt2
            className="cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        <div className="hidden sm:flex  search-input  items-center gap-3">
          <div className="logo">
            <h1 className="text-white">LOGO</h1>
          </div>
          {/* <Input.Search placeholder="input search loading with enterButton" loading enterButton /> */}
        </div>
        <div className="sm:hidden logo-mobile absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
          <h1 className="text-white">LOGO</h1>
        </div>

        <div
          className="action-user
                flex items-center gap-x-5 text-white text-[20px]"
        >
          <div className="cart">
            <AiOutlineShoppingCart className="cursor-pointer" />
            <div className="has-item bg-teal-300">10</div>
          </div>

          <FaRegUserCircle className="cursor-pointer" />
        </div>
      </div>

      <div
        className={`menu-transform inset-0 absolute z-[9999] w-full h-screen bg-red-500 duration-300	  transition-all  ${
          showMenu ? "translate-x-[0]" : "translate-x-[-200%]"
        }`}
      >
        <div className="btn-close">
          <AiOutlineClose onClick={() => setShowMenu(!showMenu)} />
        </div>
        djsabdbsada
      </div>
    </HeaderStyles>
  );
};

export default Header;
