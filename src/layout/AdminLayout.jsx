import React from "react";
import HeaderAdmin from "../components/header/HeaderAdmin";
import styled from "styled-components";
import {Outlet, useNavigate} from "react-router-dom";

import {useSelector} from "react-redux";
import {AdminProvider} from "../context/AdminContext";
const LayoutStyles = styled.div``;
const ContainerStyles = styled.div`
  max-width: 1200px;
  height: 1000px;
  margin: 0 auto;
  z-index: 0;
  padding-top: 68px;
`;
const AdminLayout = () => {
  const {user} = useSelector((state) => state.authReducer);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user.email) {
    }
  }, []);
  return (
    <AdminProvider>
      <LayoutStyles>
        <HeaderAdmin />
        <ContainerStyles>
          <Outlet />
        </ContainerStyles>
      </LayoutStyles>
    </AdminProvider>
  );
};

export default AdminLayout;
