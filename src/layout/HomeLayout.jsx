import React from "react";
import Header from "../components/header";
import styled from "styled-components";
import {Outlet} from "react-router-dom";
import Footer from "../components/footer";
const LayoutStyles = styled.div``;
const ContainerStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  z-index: 0;
  padding-top: 68px;
`;
const HomeLayout = () => {
  return (
    <LayoutStyles>
      <Header />
      <ContainerStyles>
        <Outlet />
      </ContainerStyles>
      <Footer />
    </LayoutStyles>
  );
};

export default HomeLayout;
