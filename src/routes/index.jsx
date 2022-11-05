import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routesConfig} from "./constants";

const router = createBrowserRouter(routesConfig);

const Approutes = () => {
  return <RouterProvider router={router} />;
};
export default Approutes;
