import React, {useState} from "react";
import {AiOutlineShoppingCart, AiOutlineClose} from "react-icons/ai";
import {FaRegUserCircle} from "react-icons/fa";
import {HiMenuAlt2} from "react-icons/hi";
import {Input} from "antd";
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
  const {user} = useSelector((state) => state.authReducer);
  const {listItems} = useSelector((state) => state.cartReducer);

  const {openModal} = useModal();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
            <h1 className="text-white mb-0">LOGO</h1>
          </div>
        </div>
        <div className="sm:hidden logo-mobile absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
          <h1 className="text-white">LOGO</h1>
        </div>

        <div
          className="action-user
                flex items-center gap-x-5 text-white text-[20px]"
        >
          <div onClick={hanleClickCart} className="cart">
            <AiOutlineShoppingCart className="cursor-pointer" />
            <div className="has-item bg-teal-300">
              {listItems && listItems.length}
            </div>
          </div>

          {user?.displayName && (
            <FaRegUserCircle
              onClick={() => SignOut()}
              className="cursor-pointer"
            />
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
