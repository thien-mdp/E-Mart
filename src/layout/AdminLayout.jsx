import React from "react";
import HeaderAdmin from "../components/header/HeaderAdmin";
import styled from "styled-components";
import {Outlet} from "react-router-dom";
import Footer from "../components/footer";
const LayoutStyles = styled.div``;
const ContainerStyles = styled.div`
  max-width: 1200px;
  height: 1000px;
  margin: 0 auto;
  z-index: 0;
  padding-top: 68px;
`;
const AdminLayout = () => {
  return (
    <LayoutStyles>
      <HeaderAdmin />
      <ContainerStyles>
        <Outlet/>
      </ContainerStyles>
      <Footer />
    </LayoutStyles>
  );
};

export default AdminLayout;
