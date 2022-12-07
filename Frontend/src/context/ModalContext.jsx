import {Modal} from "antd";
import React, {useCallback} from "react";
import {Login} from "../module/Auth";
import {ChangePassword, Infomation} from "../module/user"
import OrderConfirm from "../module/cart/OrderConfirm";
const ModalContext = React.createContext();

const ModalProvider = ({children}) => {
  const [open, setOpen] = React.useState(null);

  const openModal = (name) => {
    setOpen(name);
  };
  const closeModal = () => {
    setOpen(null);
  };
  const value = {
    open,
    openModal,
    closeModal,
  };
  const handleConfirmModal = (value) => {
    console.log("value", value);
  };
  return (
    <ModalContext.Provider value={value}>
      {children}
      <Modal
        title="Authorization"
        centered
        open={open === "login"}
        footer={null}
        onOk={closeModal}
        onCancel={closeModal}
        width={800}
      >
        <Login title="LOGIN" />
      </Modal>
      <Modal
        title="Infomation"
        centered
        open={open === "infomation"}
        footer={null}
        onOk={closeModal}
        onCancel={closeModal}
        width={800}
      >
        <Infomation title="Infomation" />
      </Modal>
      <Modal
        title="ChangePassword"
        centered
        open={open === "changePassword"}
        footer={null}
        onOk={closeModal}
        onCancel={closeModal}
        width={800}
      >
        <ChangePassword title="ChangePassword" />
      </Modal>
      <Modal
        title="Order Confirmation"
        centered
        footer={null}
        open={open === "orderConfirm"}
        onCancel={closeModal}
        width={800}
      >
        <OrderConfirm closeModal={closeModal} />
      </Modal>
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = React.useContext(ModalContext);
  if (typeof context === "undefined") {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export {ModalProvider, useModal};
