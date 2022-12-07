import React from "react";
import {
  AiOutlineUsergroupDelete,
  AiOutlineSchedule,
  AiOutlineFolderAdd,
  AiOutlineRollback,
} from "react-icons/ai";

export const SidebarData = [
  {
    title: "Back to my Website ",
    path: "/",
    icon: <AiOutlineRollback className="mr-2"></AiOutlineRollback>,
  },
  {
    title: "Add Product ",
    path: "/admin/add-product",
    icon: <AiOutlineFolderAdd className="mr-2"></AiOutlineFolderAdd>,
  },
  {
    title: "Order Management",
    path: "/admin/order-management",
    icon: <AiOutlineFolderAdd className="mr-2"></AiOutlineFolderAdd>,
  },
  {
    title: "User Management",
    path: "/admin/user-management",
    icon: (
      <AiOutlineUsergroupDelete className="mr-2"></AiOutlineUsergroupDelete>
    ),
  },
  {
    title: "Product Management",
    path: "/admin/product-management",
    icon: <AiOutlineSchedule className="mr-2"></AiOutlineSchedule>,
  },
];
