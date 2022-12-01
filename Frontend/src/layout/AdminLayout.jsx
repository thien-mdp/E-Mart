import React from "react";
import HeaderAdmin from "../components/header/HeaderAdmin";
import styled from "styled-components";
import {Outlet, useNavigate} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {AdminProvider} from "../context/AdminContext";
import Swal from "sweetalert2";
import {
  child,
  endAt,
  getDatabase,
  onValue,
  orderByChild,
  query,
  ref,
  startAt,
} from "firebase/database";
import {
  isUpdateOrder,
  isUpdateOrderSuccess,
} from "../stores/Orders/ordersSlice";
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
  const {orders, loading: isLoadingOrders} = useSelector(
    (state) => state.orderReducer
  );
  const dispatch = useDispatch();
  React.useLayoutEffect(() => {
    if (user.email && user.role !== 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You are not admin",
      }).then(() => {
        navigate("/");
      });
    }
  }, []);

  React.useEffect(() => {
    if (user.email && user.role === 0) {
      dispatch(isUpdateOrder(true));
      const dbRef = ref(getDatabase());
      onValue(child(dbRef, `orders/`), (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const dataArr = Object.keys(data).map((key) => ({
            ...data[key],
            key: key,
          }));

          dispatch(isUpdateOrderSuccess(dataArr));
        } else {
          dispatch(isUpdateOrderSuccess([]));
        }
      });
    }
  }, []);

  React.useEffect(() => {
    if (
      orders.length > 0 &&
      !isLoadingOrders &&
      user.email &&
      user.role === 0
    ) {
      const getOrderPending = orders.filter(
        (item) => item.status === "pending"
      );
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: true,
        confirmButtonText:"View Details",
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "info",
        title: `you have ${getOrderPending.length} unresolved orders`,
      }).then(() => {
        navigate("/admin/order-management");
      });
    }
  }, [orders]);

  if (user.email && user.role !== 0) return null;
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
