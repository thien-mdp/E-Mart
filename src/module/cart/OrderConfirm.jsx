import {Button, Form, Spin, Table} from "antd";
import {getDatabase, ref, set} from "firebase/database";
import {Timestamp} from "firebase/firestore";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import Swal from "sweetalert2";

import useUserInfo from "../../hooks/useUserInfo";
import {ClearItems} from "../../stores/Cart/cartSlice";

const OrderConfirmStyles = styled.div``;
const OrderConfirm = ({closeModal}) => {
  const [form] = Form.useForm();
  const {listItems} = useSelector((state) => state.cartReducer);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {userInfo, loading: isLoading} = useUserInfo();

  React.useEffect(() => {
    const data = !loading && userInfo ? userInfo[0] : {};

    form.setFieldsValue({
      ...data,
    });
  }, [userInfo]);

  const cartColumns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (img) => (
        <div className="image-item">
          <img
            src={img}
            alt="img"
            className="object-cover aspect-auto max-w-full"
          />
        </div>
      ),
    },
    {
      title: "Item",
      dataIndex: "item",
      key: "item",
      width: "65%",
      render: (text, record) => <span>{record?.title}</span>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: "130px",
      render: (text, record) => <span>{record?.amount}</span>,
    },
    {
      title: "Price",
      key: "price",
      width: "130px",
      render: (record) => <span>${record?.price * record?.amount}</span>,
    },
  ];

  const onFinish = async (values) => {
    const dbase = getDatabase();
    setLoading(true);
    try {
      set(ref(dbase, `orders/${userInfo[0]?.uid}?${new Date().getTime()}`), {
        ...values,
        id: new Date().getTime(),
        listItems: JSON.stringify(listItems),
        createAt: new Date().getTime(),
      }).then(() => {
        Swal.fire({
          icon: "success",
          title: "Order success",
          text: "Thank you for your order,Please check your email for payment information",
        });
        dispatch(ClearItems());
        closeModal();
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <OrderConfirmStyles>
      {isLoading && (
        <div className="absolute w-full h-full flex items-center justify-center inset-0">
          <Spin />
        </div>
      )}
      <Form form={form} onFinish={onFinish}>
        <Form.Item label="Fullname" name="fullname">
          <input
            placeholder="fullname"
            disabled
            className="text-gray-500 w-full"
          />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <input
            placeholder="email"
            disabled
            className="text-gray-500 w-full"
          />
        </Form.Item>
        <Form.Item label="Address" name="address">
          <input
            placeholder="address"
            className="text-gray-500 w-full outline-none"
          />
        </Form.Item>
        <Form.Item label="Phone Number" name="phoneNumber">
          <input
            placeholder="phone number"
            disabled
            className="text-gray-500 w-full"
          />
        </Form.Item>
        <div className="">
          <Table
            columns={cartColumns}
            dataSource={listItems}
            pagination={false}
          />
        </div>
        <div className="flex justify-end gap-3 pt-3 mt-2  ">
          <Button
            disabled={isLoading || loading}
            loading={isLoading || loading}
            htmlType="button"
            onClick={closeModal}
            type="danger"
            className="text-gray-800"
          >
            close
          </Button>
          <Button
            disabled={isLoading || loading}
            loading={isLoading || loading}
            htmlType="submit"
            type="primary"
            className="text-gray-800"
          >
            Confirm
          </Button>
        </div>
      </Form>
    </OrderConfirmStyles>
  );
};

export default OrderConfirm;
