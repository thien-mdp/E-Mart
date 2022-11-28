import {useEffect, useState} from "react";
import {ThemeProvider} from "styled-components";
import Aos from "./Aos";
import AppRoutes from "./routes";
import {auth, db} from "./firebase";
import {collection, getDocs} from "firebase/firestore";
import {useDispatch, useSelector} from "react-redux";
import {onAuthStateChanged} from "firebase/auth";
import {updateUser} from "./stores/Auth/authSlice";
import BlankLayout from "./layout/BlankLayout";
import {Route, Routes} from "react-router-dom";
import {Login, Register} from "./module/Auth";
import HomeLayout from "./layout/HomeLayout";
import Home from "./module/home";
import Product from "./module/product";
import Category from "./module/category";
import Cart from "./module/cart";
import AdminLayout from "./layout/AdminLayout";
import Admin from "./module/admin/Admin";
import ManageUser from "./module/admin/ManageUser";
import ManageProduct from "./module/admin/ManageProduct";
import AddProduct from "./module/admin/AddProduct";
import {updateCart} from "./stores/Cart/cartSlice";
import OrderManagement from "./module/admin/OrderManagement";

function App() {
  const theme = {};
  const dispatch = useDispatch();
  const {listItems} = useSelector((state) => state.cartReducer);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(updateUser(user));
      }
    });
  }, []);
  useEffect(() => {
    const checkLocalStorage = JSON.parse(localStorage.getItem("cart"));
    if (checkLocalStorage) {
      dispatch(updateCart(checkLocalStorage));
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Aos />
      <Routes>
        <Route element={<BlankLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/user-management" element={<ManageUser />} />
          <Route path="/admin/product-management" element={<ManageProduct />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/admin/order-management" element={<OrderManagement />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
