import React from "react";
import {Outlet} from "react-router-dom";
import styled from "styled-components";

const BlankLayoutStyles = styled.div``;

const BlankLayout = () => {
  return (
    <BlankLayoutStyles>
      <Outlet />
    </BlankLayoutStyles>
  );
};

export default BlankLayout;
