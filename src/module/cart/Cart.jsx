import {Button, Input, Table} from "antd";
import React from "react";
import styled from "styled-components";
import TitleImage from "../../components/TitleImage/TitleImage";
import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

const CartStyles = styled.div`
  width: 100%;
  height: 100vh;

  z-index: 0;
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
const data = [
  {
    key: "1",
    item: "John Brown",
    image:
      "https://cdn.shopify.com/s/files/1/1619/4791/products/B1seplusprinter_600x.jpg?v=1666238784",
    amount: 1,
    price: 2000,
  },
  {
    key: "1",
    item: "John Brown",
    image:
      "https://www.xtsmart.vn/vnt_upload/product/03_2021/thumbs/(600x600)_crop_iphone_xs_max_gold_xtsmart.jpg",
    amount: 1,
    price: 2000,
  },
  {
    key: "1",
    item: "John Brown",
    image:
      "https://www.xtsmart.vn/vnt_upload/product/03_2021/thumbs/(600x600)_crop_iphone_xs_max_gold_xtsmart.jpg",
    amount: 1,
    price: 2000,
  },
  {
    key: "1",
    item: "John Brown",
    image:
      "https://www.xtsmart.vn/vnt_upload/product/03_2021/thumbs/(600x600)_crop_iphone_xs_max_gold_xtsmart.jpg",
    amount: 1,
    price: 2000,
  },
  {
    key: "1",
    item: "John Brown",
    image:
      "https://www.xtsmart.vn/vnt_upload/product/03_2021/thumbs/(600x600)_crop_iphone_xs_max_gold_xtsmart.jpg",
    amount: 1,
    price: 2000,
  },
  {
    key: "1",
    item: "John Brown",
    image:
      "https://www.xtsmart.vn/vnt_upload/product/03_2021/thumbs/(600x600)_crop_iphone_xs_max_gold_xtsmart.jpg",
    amount: 1,
    price: 2000,
  },
  {
    key: "1",
    item: "John Brown",
    image:
      "https://www.xtsmart.vn/vnt_upload/product/03_2021/thumbs/(600x600)_crop_iphone_xs_max_gold_xtsmart.jpg",
    amount: 1,
    price: 2000,
  },
  {
    key: "1",
    item: "John Brown",
    image:
      "https://www.xtsmart.vn/vnt_upload/product/03_2021/thumbs/(600x600)_crop_iphone_xs_max_gold_xtsmart.jpg",
    amount: 1,
    price: 2000,
  },
  {
    key: "1",
    item: "John Brown",
    image:
      "https://www.xtsmart.vn/vnt_upload/product/03_2021/thumbs/(600x600)_crop_iphone_xs_max_gold_xtsmart.jpg",
    amount: 1,
    price: 2000,
  },
  {
    key: "1",
    item: "John Brown",
    image:
      "https://www.xtsmart.vn/vnt_upload/product/03_2021/thumbs/(600x600)_crop_iphone_xs_max_gold_xtsmart.jpg",
    amount: 1,
    price: 2000,
  },
];
const Cart = () => {
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
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: "130px",
      render: (text) => (
        <ActionStyles>
          <Input
            addonBefore={<PlusCircleOutlined />}
            addonAfter={<MinusCircleOutlined />}
            defaultValue={0}
          />
        </ActionStyles>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "130px",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => <Button danger icon={<DeleteOutlined />} />,
    },
  ];
  return (
    <CartStyles>
      <div className="cart-container relative w-full">
        <div className="cart-title">
          <TitleImage margin="ml-0 mr-0 my">CART</TitleImage>
        </div>
        <div className="list-item-cart">
          <Table dataSource={data} columns={cartColumns} pagination={false} />
        </div>
      </div>
      <div className="cart-footer mx-auto fixed w-full px-5 bg-white border border-t-gray-200  left-0 right-0 bottom-0">
        <div className="mx-auto flex items-center justify-between max-w-[1200px] h-[70px] px-5">
          <div className="text-total  flex items-center">
            <p className="mb-0 text-base font-medium">TOTAL :</p>
          </div>
          <div className="text-price">
            <span className="mb-0">100$</span>
          </div>
        </div>
      </div>
    </CartStyles>
  );
};

export default Cart;
