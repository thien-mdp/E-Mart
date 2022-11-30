import React from "react";

const AdminContext = React.createContext();

const AdminProvider = ({children}) => {
  const [notification, setNotification] = React.useState(null);

  const openNotification = (notification) => {
    setNotification(notification);
  };
  const closeNotification = () => {
    setNotification(null);
  };
  const value = {
    notification,
    openNotification,
    closeNotification,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

const useAdmin = () => {
  const context = React.useContext(AdminContext);
  if (typeof context === "undefined") {
    throw new Error("useAdmin must be used within a NotificationProvider");
  }
  return context;
};

export {useAdmin, AdminProvider};
