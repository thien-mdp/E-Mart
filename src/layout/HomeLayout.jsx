import React from "react";
import Header from "../components/header";
import styled from "styled-components";
import {Outlet} from "react-router-dom";
import Footer from "../components/footer";
import {useSelector} from "react-redux";
import {Spin} from "antd";
const LayoutStyles = styled.div``;
const ContainerStyles = styled.div`
  max-width: 1200px;
  background-color: white;
  margin: 0 auto;
  z-index: 0;
  padding-top: 68px;
  padding-left: 20px;
  padding-right: 20px;
`;
const HomeLayout = () => {
  const {loading} = useSelector((state) => state.authReducer);

  return (
    <LayoutStyles>
      <Header />
      <ContainerStyles>
        <Outlet />
      </ContainerStyles>
      {/* <Footer /> */}
    </LayoutStyles>
  );
};

export default HomeLayout;
