import HomeLayout from "../layout/HomeLayout";
import Home from "../module/home";
import AdminLayout from "../layout/AdminLayout";
import Admin from "../module/admin/Admin";
import ManageUser from "../module/admin/ManageUser";
import ManageProduct from '../module/admin/ManageProduct';
import AddProduct from "../module/admin/AddProduct";
export const routesConfig = [

  {
 
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
    ],
  },
  {
 
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Admin/>,
      },
      {
        path: "/admin/user-management",
        element: <ManageUser/>,
      },
      {
        path: "/admin/product-management",
        element: <ManageProduct/>,
      },
      {
        path: "/admin/add-product",
        element: <AddProduct/>,
      },
    ],
  },
];