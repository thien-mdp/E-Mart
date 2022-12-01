import React, {useEffect, useState} from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineBars,
  AiOutlineClose,
} from "react-icons/ai";
import {FaRegUserCircle} from "react-icons/fa";
import {HiMenuAlt2} from "react-icons/hi";
import styled from "styled-components";
import {SidebarData} from "../sidebar/Sidebar";
import classes from "./HeaderAdmin.module.css";
import "antd/dist/antd.css";
import {Link} from "react-router-dom";
import {BellOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";

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

const HeaderAdmin = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [bgHeader, setBgHeader] = React.useState(false);
  const [sidebar, setSidebar] = useState(false);
  const {orders} = useSelector((state) => state.orderReducer);
  const [show, setShow] = React.useState(false);
  const elementRef = React.useRef(null);
  const buttonBtn = React.useRef(null);
  const getOrderPending = React.useMemo(() => {
    return orders.filter((item) => item.status === "pending");
  }, [orders]);
  useEffect(() => {
    const checkOnClickOutside = (event) => {
      if (buttonBtn.current && buttonBtn.current.contains(event.target)) {
        return;
      }
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", checkOnClickOutside);
    return () => {
      document.removeEventListener("mousedown", checkOnClickOutside);
    };
  }, []);
  const showSidebar = (event) => {
    event.preventDefault();
    setSidebar(!sidebar);
  };

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
    <div>
      <HeaderStyles
        className={`py-3  top-header z-[999]  w-full transition-all fixed  h-[68px]  right-0 left-0 ${
          bgHeader ? "bg-blue-700 " : "bg-[#060b26]"
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
            <Link to="#" className={classes.menu_bars}>
              <AiOutlineBars onClick={showSidebar} />
            </Link>
            {/* <Input.Search placeholder="input search loading with enterButton" loading enterButton /> */}
          </div>
          <div className="sm:hidden logo-mobile absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
            <Link to="#" className={classes.menu_bars}>
              <AiOutlineBars onClick={showSidebar} />
            </Link>
          </div>

          <div
            className="action-user
                flex items-center gap-x-5 text-white text-[20px]"
          >
            <div className="relative flex items-center">
              <button
                ref={buttonBtn}
                onClick={() => setShow((prev) => !prev)}
                className="inline-block relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="animate-ping absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ring-red-700 bg-red-700"></span>
              </button>
              {show && (
                <div
                  ref={elementRef}
                  className="absolute w-[300px] left-2/4 -translate-x-2/4 bg-white  top-[120%] max-w-[300px] p-3 shadow-md"
                >
                  <div className="mb-5">
                    <h4 className="text-base font-medium">Notification</h4>
                  </div>
                  <Link to="/admin">
                    <div className="flex items-center hover:bg-blue-200">
                      <div className="pr-2">
                        <img
                          src="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          className="object-cover  w-10 h-10 rounded-full"
                          alt="icon"
                        />
                      </div>
                      <div>
                        <p className="text-gray-700 text-sm">
                          you have{" "}
                          <span className="text-orange-500 font-bold">
                            {getOrderPending.length}
                          </span>{" "}
                          new orders
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
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
        </div>
      </HeaderStyles>
      <nav
        className={
          sidebar ? classes.nav_menu + " " + classes.active : classes.nav_menu
        }
      >
        <ul className={classes.nav_menu_item} onClick={showSidebar}>
          <li className={classes.navbar_toggle}>
            <Link to="#" className={classes.menu_bars}>
              <AiOutlineArrowLeft />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={item.title} className={classes.nav_text}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderAdmin;
