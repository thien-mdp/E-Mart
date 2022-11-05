import HomeLayout from "../layout/HomeLayout";
import Home from "../module/home";
import AdminLayout from "../layout/AdminLayout";
import Admin from "../module/admin/Admin";
import ManageUser from "../module/admin/ManageUser";
import ManageProduct from "../module/admin/ManageProduct";
import AddProduct from "../module/admin/AddProduct";
import Cart from "../module/cart/Cart";
import Category from "../module/category";
import Home from "../module/home";
import Product from "../module/product";

export const routesConfig = [
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
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
        element: <Admin />,
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
    ],
  },
];
