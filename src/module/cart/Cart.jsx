import {Button, Input, Popconfirm, Table} from "antd";
import React, {useEffect, useMemo} from "react";
import styled from "styled-components";
import TitleImage from "../../components/TitleImage/TitleImage";
import {
  DeleteOutlined,
  MinusCircleOutlined,
  DollarOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import {useModal} from "../../context/ModalContext";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {deleteItem} from "../../stores/Cart/cartSlice";

const CartStyles = styled.div`
  width: 100%;
  height: 100vh;

  z-index: 0;
  .ant-btn-primary {
    background-color: #1890ff !important;
  }
`;
const ImageItemStyles = styled.div``;
const ActionStyles = styled.div`
  .ant-input-group-addon {
    & > span {
      top: 9px;
      right: 4px;

      cursor: pointer;
      position: absolute;
      border: none;
      outline: none;
    }
  }
`;

const Cart = () => {
  const {user} = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const {openModal} = useModal();
  const {listItems} = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const handleUpdateAmount = (id, amount) => {
    console.log("id, amount");
  };
  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };
  const totalPrice = useMemo(() => {
    return (
      listItems &&
      listItems.reduce((acc, item) => {
        return acc + item.price * item.amount;
      }, 0)
    );
  }, [listItems]);
  const cartColumns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (img) => (
        <ImageItemStyles>
          <div className="image-item">
            <img
              src={img}
              alt="img"
              className="object-cover aspect-auto max-w-full"
            />
          </div>
        </ImageItemStyles>
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
      render: (text, record) => {
        console.log(record);
        return (
          <ActionStyles>
            <Input
              addonBefore={
                <PlusCircleOutlined onClick={() => handleUpdateAmount()} />
              }
              addonAfter={
                <MinusCircleOutlined onClick={() => handleUpdateAmount()} />
              }
              value={Number(record?.amount)}
            />
          </ActionStyles>
        );
      },
    },
    {
      title: "Price",
      key: "price",
      width: "130px",
      render: (record) => <span>${record?.price * record?.amount}</span>,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <Popconfirm
          placement="leftTop"
          title={"Are you sure to delete this item?"}
          onConfirm={() => handleDeleteItem(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button danger icon={<DeleteOutlined />} />
        </Popconfirm>
      ),
    },
  ];
  useEffect(() => {
    if (!user?.email) {
      navigate(-1);
    }
  }, [user]);

  return (
    <CartStyles>
      <div className="cart-container relative w-full">
        <div className="cart-title">
          <TitleImage margin="ml-0 mr-0 my">CART</TitleImage>
        </div>
        <div className="list-item-cart">
          <Table
            columns={cartColumns}
            dataSource={listItems.map((item) => ({...item, key: item.id}))}
            pagination={false}
          />
        </div>
      </div>
      <div className="cart-footer mx-auto fixed w-full px-5 bg-white border border-t-gray-200  left-0 right-0 bottom-0">
        <div className="mx-auto flex items-center justify-between max-w-[1200px] h-[70px] px-5">
          <div className="text-total  flex items-center">
            <p className="mb-0 text-base font-medium">TOTAL :</p>
          </div>
          <div className="text-price flex items-center gap-3">
            <span className="mb-0">{totalPrice}$</span>
            <div>
              <Button
                type="primary"
                onClick={() => openModal("orderConfirm")}
                className="flex items-center"
                icon={<DollarOutlined />}
              >
                PAY UP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </CartStyles>
  );
};

export default Cart;
