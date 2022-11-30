import React from "react";
import HeaderAdmin from "../components/header/HeaderAdmin";
import styled from "styled-components";
import {Outlet, useNavigate} from "react-router-dom";

import {useSelector} from "react-redux";
import {AdminProvider} from "../context/AdminContext";
import Swal from "sweetalert2";
const LayoutStyles = styled.div``;
const ContainerStyles = styled.div`
  max-width: 1300px;
  height: 1100px;
  margin: 0 auto;
  z-index: 0;
  padding-top: 68px;
`;
const AdminLayout = () => {
  const {user} = useSelector((state) => state.authReducer);
  const navigate = useNavigate();

  React.useLayoutEffect(() => {
    // if (user.email && user.role !== 0) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "You are not admin",
    //   }).then(() => {
    //     navigate("/");
    //   });
    // }
  }, []);

  // if (user.email && user.role !== 0) return null;
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
