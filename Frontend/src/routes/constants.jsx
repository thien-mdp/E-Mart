import HomeLayout from "../layout/HomeLayout";
import AdminLayout from "../layout/AdminLayout";
import ManageUser from "../module/admin/ManageUser";
import ManageProduct from "../module/admin/ManageProduct";
import AddProduct from "../module/admin/AddProduct";
import Cart from "../module/cart/Cart";
import Category from "../module/category";
import Home from "../module/home";
import Product from "../module/product";
import BlankLayout from "../layout/BlankLayout";
import {Login, Register} from "../module/Auth";
import OrderManagement from "../module/admin/OrderManagement";

export const routesConfig = [
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <OrderManagement />,
      },
      {
        path: "/admin/user-management",
        element: <ManageUser />,
      },
      {
        path: "/admin/product-management",
        element: <ManageProduct />,
      },
      {
        path: "/admin/add-product",
        element: <AddProduct />,
      },

      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
  {
    element: <BlankLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
];
