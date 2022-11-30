import {Spin} from "antd";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routesConfig} from "./constants";

const router = createBrowserRouter(routesConfig);

const Approutes = () => {
  return <RouterProvider router={router} fallbackElement={<Spin />} />;
};
export default Approutes;
