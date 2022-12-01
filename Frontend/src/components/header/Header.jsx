import React, {useState} from "react";
import {AiOutlineShoppingCart, AiOutlineClose} from "react-icons/ai";
import {FaRegUserCircle} from "react-icons/fa";
import {HiMenuAlt2} from "react-icons/hi";
import {Input, Dropdown} from "antd";
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signOut} from "firebase/auth";
import {auth} from "../../firebase";
import {updateUser} from "../../stores/Auth/authSlice";
import {useModal} from "../../context/ModalContext";

const HeaderStyles = styled.header`
  .cart {
    position: relative;
    .has-item {
      font-size: 12px;
      position: absolute;
      width: 18px;
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;

      top: -7px;
      right: -7px;
    }
  }
`;

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const {user} = useSelector((state) => state.authReducer);
  const {listItems} = useSelector((state) => state.cartReducer);
  const {openModal} = useModal();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = [
    {
      key: "1",
      label: (
        <a target="_blank" href="#" onClick={(e) => e.preventDefault()}>
          Infomation
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" href="#" onClick={(e) => e.preventDefault()}>
          Change Password
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <button
          target="_blank"
          className="w-full text-left hover:font-bold hover:text-rose-300 "
          onClick={() => SignOut()}
        >
          Logout
        </button>
      ),
    },
  ];

  const SignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(updateUser({}));
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const hanleClickCart = () => {
    if (user && user?.email) {
      navigate("/cart");
    } else {
      openModal("login");
    }
  };

  return (
    <HeaderStyles
      className={`py-3  top-header z-[999]  w-full transition-all fixed  h-[68px]  right-0 left-0 bg-black
      }`}
    >
      <div className="mx-auto px-5  h-full  max-w-[1200px] flex items-center justify-between">
        <div className="sm:hidden menu-mobile text-white text-[20px]">
          <HiMenuAlt2
            className="cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        <div className="hidden sm:flex  search-input  items-center gap-3">
          <div className="logo">
            <a
              className="font-mono text-white mb-0 text-[20px] hover:text-blue-700"
              href="/"
            >
              3D Printer
            </a>
            {/* <img src='../../../logo.svg' className="max-w-[100px] bg-[#2bb4bf]  inline"/> */}
          </div>
        </div>
        <div className="sm:hidden logo-mobile absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
          <a
            href="/"
            className="font-mono text-white mb-0 text-[20px] hover:text-blue-700"
          >
            3D Printer
          </a>
          {/* <img src='../../../logo.svg' className="max-w-[100px] bg-[#2bb4bf] inline"/> */}
        </div>

        <div
          className="action-user
                flex items-center gap-x-5 text-white text-[20px]"
        >
          <div onClick={hanleClickCart} className="cart hover:text-blue-700 ">
            <AiOutlineShoppingCart className="cursor-pointer w-7 h-7" />
            <div
              className={`has-item bg-red-800 ${
                listItems.length > 0 && "animate-pulse"
              } `}
            >
              {listItems && listItems.length}
            </div>
          </div>

          {user?.displayName && (
            <Dropdown
              menu={{
                items,
              }}
              dropdownRender={(menu) => (
                <div className="dropdown-content">{menu}</div>
              )}
            >
              <FaRegUserCircle className="cursor-pointer w-6 h-6 hover:text-blue-700" />
            </Dropdown>
          )}
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
  );
};

export default Header;
